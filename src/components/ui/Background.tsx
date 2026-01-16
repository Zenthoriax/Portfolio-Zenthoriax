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
        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetX = width / 2;
        let targetY = height / 2;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const render = () => {
            // Smooth follow
            mouseX += (targetX - mouseX) * 0.1;
            mouseY += (targetY - mouseY) * 0.1;

            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, width, height);

            // Subtle Glow
            // Large radius, very low opacity
            const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 600);

            // Core of the light
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)'); // Very faint blue
            // Mid drop off
            gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.02)');
            // Fade out
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Add some very faint ambient noise/stars if desired, 
            // but user requested "Not a visual effect demo", so keeping it clean.

            requestAnimationFrame(render);
        };

        const animId = requestAnimationFrame(render);

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
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
