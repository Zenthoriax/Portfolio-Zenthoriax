'use client';

import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="section container">
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Context</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Academic Status</h3>
                    <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
                        Currently a <strong className="text-accent">second-year undergraduate</strong> pursuing B.Tech in Computer Science & Engineering
                        (Specialization in AI & ML) at Jain University, Kochi.
                    </p>
                    <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                        My academic focus is shifting from theoretical fundamentals to practical, system-level implementation of AI models.
                    </p>
                </div>

                {/* Terminal Window Bio */}
                <div style={{
                    background: '#0a0a0c',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Terminal Header */}
                    <div style={{
                        padding: '0.5rem 1rem',
                        background: '#1a1a1c',
                        borderBottom: '1px solid #333',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center'
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }}></div>
                        <span style={{ marginLeft: '1rem', fontSize: '0.8rem', opacity: 0.5 }}>zeno@machine:~</span>
                    </div>

                    {/* Terminal Content */}
                    <div style={{ padding: '1.5rem', fontSize: '0.9rem', color: '#ccc', flexGrow: 1 }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#3b82f6' }}>~</span> whoami
                        </div>
                        <div style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                            "Jeevananthan S"
                            <br />
                            <span style={{ opacity: 0.5 }}>// Aspiring ML Engineer & Systems Architect</span>
                        </div>

                        <div style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#3b82f6' }}>~</span> cat current_focus.json
                        </div>
                        <div style={{ marginBottom: '1rem', paddingLeft: '1rem', color: '#e5e5e5' }}>
                            {'{'}
                            <br />
                            &nbsp;&nbsp;"primary": "Computer Vision",
                            <br />
                            &nbsp;&nbsp;"secondary": "Distributed Systems",
                            <br />
                            &nbsp;&nbsp;"learning": ["CUDA", "Rust", "Transformers"]
                            <br />
                            {'}'}
                        </div>

                        <div>
                            <span style={{ color: '#28c840' }}>➜</span> <span style={{ color: '#3b82f6' }}>~</span> <span className="cursor-blink">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
