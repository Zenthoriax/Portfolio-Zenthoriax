'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Typewriter = ({ words, speed = 150, delay = 3000 }: { words: string[], speed?: number, delay?: number }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const timer = setTimeout(() => {
            if (isDeleting) {
                setText(word.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                setText(word.substring(0, text.length + 1));
                if (text.length === word.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentWordIndex, words, speed, delay]);

    return (
        <span style={{
            fontFamily: 'var(--font-outfit)',
            color: 'var(--secondary)',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            display: 'block',
            minHeight: 'clamp(1.5rem, 3vw, 2rem)',
        }}>
            {text}
            <span className="cursor-blink" style={{ color: 'var(--accent)' }}>.</span>
        </span>
    );
};

export function Hero() {
    return (
        <section className="section container" style={{ alignItems: 'flex-start', minHeight: '100vh', justifyContent: 'center' }}>
            <div style={{ maxWidth: 'min(900px, 100%)', width: '100%', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span
                        className="text-accent"
                        style={{
                            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                            display: 'block'
                        }}
                    >
                        Portfolio 2026
                    </span>
                </motion.div>

                <motion.h1
                    className="text-gradient"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                        lineHeight: 1.1,
                        marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em'
                    }}
                >
                    Jeevananthan S
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.75rem, 2vw, 1rem)',
                        marginBottom: 'clamp(2rem, 4vw, 3rem)'
                    }}
                >
                    <Typewriter
                        words={['AI Researcher', 'System Architect', 'Full Stack Engineer']}
                        speed={80}
                        delay={2500}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                        opacity: 0.7,
                        lineHeight: 1.7,
                        maxWidth: 'min(550px, 100%)',
                        marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)'
                    }}
                >
                    Designing intelligence. I bridge the gap between abstract ML research and robust, production-grade deployment systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        display: 'flex',
                        gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                        flexWrap: 'wrap'
                    }}
                >
                    <a href="#projects" className="glass-panel" style={{
                        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 500,
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
                    }}>
                        Latest Work
                    </a>
                    <a href="https://github.com/Zenthoriax" target="_blank" style={{
                        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                        opacity: 0.7,
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
                    }}>
                        GitHub <span>↗</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
