'use client';

import { motion } from 'framer-motion';

function MoreProjectsCard() {
    return (
        <a
            href="https://github.com/Zenthoriax"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '300px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px dashed var(--glass-border)'
            }}
        >
            <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.8 }}>⚡</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>More Experiments</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '200px' }}>
                Explore my full repository of code and experiments on GitHub.
            </p>
            <div className="text-accent" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                Zenthoriax/Repositories ↗
            </div>
        </a>
    );
}

export function Projects() {
    const projects = [
        {
            title: "Hyper-Local Vector Control",
            type: "Research Architecture",
            tech: "System Design, NUS Program, Data Flow",
            stats: {
                accuracy: "N/A (Design)",
                dataset: "IoT Simulation",
                params: "System Arch"
            },
            description: "An exploratory system design for disease vector control (mosquitoes) using hyper-local data. Focused on architectural constraints and data flow rather than just model accuracy.",
            learning: "Learned the importance of sensor placement and data granularity in environmental monitoring systems.",
            github: "https://github.com/Zenthoriax/hyperlocal-vector-control"
        },
        {
            title: "Groundwater Level Prediction",
            type: "Forecasting System",
            tech: "XGBoost, Python, Time-Series",
            stats: {
                accuracy: "RMSE < 0.5m",
                dataset: "Sensor Logs",
                params: "XGBoost"
            },
            description: "Regression system attempting real-time groundwater level forecasting based on sensor data. Utilized XGBoost for processing sequential environmental inputs.",
            learning: "Highlighting the preprocessing challenges in real-world time-series sensor data.",
            github: "https://github.com/jeevananthan-98/Hydrointel"
        },
        {
            title: "Fashion-MNIST Classifier",
            type: "Computer Vision",
            tech: "TensorFlow, Keras, Streamlit",
            stats: {
                accuracy: "~92% Test Acc",
                dataset: "Fashion-MNIST",
                params: "CNN Base"
            },
            description: "End-to-end image classification pipeline deployed via Streamlit. A study in CNN architecture basics and serving models to a web interface.",
            learning: "Understanding the gap between a trained notebook model and a deployed interactive application.",
            github: "https://github.com/Zenthoriax/fashion-mnist-classifier"
        },
        {
            title: "Personal Finance Tracker",
            type: "Full Stack App",
            tech: "PostgreSQL, Docker, Full-Stack",
            stats: {
                accuracy: "100% Uptime",
                dataset: "User Financials",
                params: "Docker/SQL"
            },
            description: "A dockerized expense tracking system with a persistent database backend. Built to understand data persistence and containerization.",
            learning: "Gained practical experience with Dockerizing stateful applications and managing database schemas.",
            github: "https://github.com/Zenthoriax/personal-finance-app"
        }
    ];

    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    marginBottom: '3rem',
                    borderLeft: '4px solid var(--accent)',
                    paddingLeft: '1rem'
                }}
            >
                Research & <span className="text-accent">Models</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header Stripe */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'var(--accent)'
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{project.title}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.6, fontFamily: 'monospace' }}>{project.type}</p>
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                padding: '0.25rem 0.5rem',
                                border: '1px solid var(--accent)',
                                borderRadius: '4px',
                                color: 'var(--accent)',
                                fontFamily: 'monospace'
                            }}>
                                MODEL CARD
                            </span>
                        </div>


                        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, opacity: 0.8, flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <div style={{
                            marginTop: 'auto',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.9rem',
                            color: 'var(--secondary)'
                        }}>
                            <span style={{ marginRight: '0.5rem' }}>⚡</span>
                            {project.learning}
                        </div>
                    </motion.a>
                ))}

                {/* More Projects Card */}
                <MoreProjectsCard />
            </div>
        </section>
    );
}
