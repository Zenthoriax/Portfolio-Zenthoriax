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
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentWordIndex, words, speed, delay]);

    return (
        <span style={{
            fontFamily: 'monospace',
            color: 'var(--secondary)',
            fontSize: '1rem',
            display: 'block',
            height: '1.5rem', // Min height to prevent jump
            marginBottom: '1rem'
        }}>
            {text}
            <span className="cursor-blink">|</span>
        </span>
    );
};

export function Hero() {
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
                    <Typewriter
                        words={['[Python]', '[PyTorch]', '[TensorFlow]', '[System Design]', '[Deployments]']}
                        speed={100}
                        delay={2000}
                    />
                </motion.div>

                <motion.h1
                    className="text-gradient"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}
                >
                    Jeevananthan S
                </motion.h1>

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
