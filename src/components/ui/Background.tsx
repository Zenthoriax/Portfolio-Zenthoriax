'use client';

import { useEffect, useRef } from 'react';

export function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Particle[] = [];

        // Configuration
        const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive count
        const connectionDistance = 150;
        const interactionDistance = 200;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.02; // Ultra slow
                this.vy = (Math.random() - 0.5) * 0.02;
                this.size = Math.random() * 2 + 1;
            }

            update(mouseX: number, mouseY: number) {
                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (Repel)
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < interactionDistance) {
                    const forceDirectionX = dx / dist;
                    const forceDirectionY = dy / dist;
                    const force = (interactionDistance - dist) / interactionDistance;

                    // Gentle push
                    this.vx += forceDirectionX * force * 0.05;
                    this.vy += forceDirectionY * force * 0.05;
                }

                // Friction
                // this.vx *= 0.99;
                // this.vy *= 0.99;
                // Keep speed minimum to prevent stopping
                // Not strictly necessary for ambient float
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; // Blue points
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init(); // Re-init on resize to spread particles
        };

        let mouseX = -500;
        let mouseY = -500;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Background Color
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, width, height);

            // Update and Draw Particles
            particles.forEach((p, index) => {
                p.update(mouseX, mouseY);
                p.draw();

                // Connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - distance / connectionDistance)})`;
                        ctx.lineWidth = 2;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
}
