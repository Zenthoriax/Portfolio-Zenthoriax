'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
    const [activeName, setActiveName] = useState('Jeevananthan S');

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveName(prev => prev === 'Jeevananthan S' ? 'Zenthoriax' : 'Jeevananthan S');
        }, 5000); // 5 seconds per name
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="section container" style={{ alignItems: 'flex-start', minHeight: '90vh' }}>
            <div style={{ maxWidth: '800px', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                >
                    <span
                        className="text-accent"
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            display: 'block',
                            marginBottom: '1rem',
                            letterSpacing: '0.05em'
                        }}
                    >
                        AI/ML Student (2nd Year)
                    </span>
                </motion.div>

                <div style={{ height: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={activeName} // 'Jeevananthan S' or 'Zenthoriax'
                            className="text-gradient"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                lineHeight: 1.1,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%'
                            }}
                        >
                            {activeName}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
                    style={{
                        fontSize: '1.25rem',
                        opacity: 0.8,
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        marginBottom: '3rem'
                    }}
                >
                    Experimenting with <span className="text-accent">applied machine learning</span> and <span className="text-accent">deployment-oriented AI</span>.
                    Focusing on moving models from notebooks to production-like environments through robust system design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <a href="#projects" className="glass-panel" style={{ padding: '1rem 2rem', fontWeight: 600 }}>
                        View Work
                    </a>
                    <a href="#about" style={{ padding: '1rem 2rem', opacity: 0.7, textDecoration: 'underline' }}>
                        About Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
