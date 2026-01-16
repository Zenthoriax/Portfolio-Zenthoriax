'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export function Background() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Cleanup previous instance if any (handling React strict mode double-invoke)
        const cleanup = () => {
            if (engineRef.current) {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
                if (render.canvas) {
                    render.canvas.remove();
                }
            }
        };

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // Create engine
        const engine = Engine.create();
        engine.gravity.y = 0; // Zero gravity initially
        engine.gravity.x = 0;
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });

        // Create falling shapes
        const shapes: Matter.Body[] = [];
        const colors = ['#3b82f6', '#ffffff', '#a0a0a0'];

        for (let i = 0; i < 50; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 30 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];

            const bodyOption = {
                render: {
                    fillStyle: i % 3 === 0 ? 'transparent' : color,
                    strokeStyle: color,
                    lineWidth: 1,
                    opacity: 0.6
                },
                restitution: 0.9,
                frictionAir: 0.05,
            };

            if (Math.random() > 0.5) {
                shapes.push(Bodies.rectangle(x, y, size, size, bodyOption));
            } else {
                shapes.push(Bodies.circle(x, y, size / 2, bodyOption));
            }
        }

        // Add boundaries (walls) so visuals stay on screen - slightly offscreen
        const wallOptions = { isStatic: true, render: { visible: false } };
        const walls = [
            Bodies.rectangle(window.innerWidth / 2, -50, window.innerWidth, 100, wallOptions),
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, wallOptions),
            Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, wallOptions),
            Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, wallOptions)
        ];

        Composite.add(engine.world, [...shapes, ...walls]);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Run the renderer
        Render.run(render);

        // Create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Add custom loop for gentle float + cursor repulsion
        const runLoop = () => {
            if (!engineRef.current) return;

            // Gentle random movement for "floating" effect
            shapes.forEach(body => {
                Matter.Body.applyForce(body, body.position, {
                    x: (Math.random() - 0.5) * 0.00005,
                    y: (Math.random() - 0.5) * 0.00005
                });
            });

            // Repulsive force from cursor
            if (mouse.position.x !== 0 && mouse.position.y !== 0) {
                shapes.forEach(body => {
                    const dx = body.position.x - mouse.position.x;
                    const dy = body.position.y - mouse.position.y;
                    const distanceSq = dx * dx + dy * dy;

                    // Reduced radius, focused effect
                    if (distanceSq < 50000) {
                        const force = 0.005 / Math.sqrt(distanceSq);
                        Matter.Body.applyForce(body, body.position, {
                            x: dx * force,
                            y: dy * force
                        });
                    }
                });
            }

            requestAnimationFrame(runLoop);
        };
        runLoop();

        // Handle resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cleanup();
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
