'use client';

export function Skills() {
    const categories = [
        {
            name: "Core Languages",
            skills: ["Python", "Java", "SQL"]
        },
        {
            name: "AI & Frameworks",
            skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"]
        },
        {
            name: "Tools & Deployment",
            skills: ["Docker", "Git", "Streamlit", "PostgreSQL"]
        }
    ];

    return (
        <section id="skills" className="section container" style={{ minHeight: '50vh' }}>
            <div style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
                <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Toolkit</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    {categories.map((cat, i) => (
                        <div key={i}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9 }}>{cat.name}</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {cat.skills.map((skill, j) => (
                                    <li key={j} style={{ opacity: 0.7, fontSize: '1rem' }}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
