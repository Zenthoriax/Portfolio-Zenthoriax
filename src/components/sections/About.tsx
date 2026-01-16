'use client';

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

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technical Interests</h3>
                    <ul style={{ lineHeight: 1.8, opacity: 0.8, listStyle: 'none' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span className="text-accent" style={{ marginRight: '0.5rem' }}>01.</span>
                            Applied Machine Learning
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span className="text-accent" style={{ marginRight: '0.5rem' }}>02.</span>
                            Computer Vision Systems
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span className="text-accent" style={{ marginRight: '0.5rem' }}>03.</span>
                            Edge / Deployment-oriented AI
                        </li>
                        <li>
                            <span className="text-accent" style={{ marginRight: '0.5rem' }}>04.</span>
                            Data-driven System Design
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
