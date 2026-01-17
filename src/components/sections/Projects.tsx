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
        },
        {
            title: "AI-Powered Spam Classifier",
            type: "NLP & Text Classification",
            tech: "Python, Scikit-learn, NLP (TF-IDF)",
            stats: {
                accuracy: "~98%",
                dataset: "SMS Spam Dataset",
                params: "Naive Bayes"
            },
            description: "A high-accuracy spam detection system using statistical NLP. Implements comprehensive text preprocessing and TF-IDF vectorization to effectively classify SMS and email messages.",
            learning: "Learned effective text preprocessing pipelines and the application of statistical algorithms for text classification.",
            github: "https://github.com/Zenthoriax/Spam-Classifier"
        },
        {
            title: "Deep Learning Image Classification",
            type: "Computer Vision",
            tech: "Python, TensorFlow/Keras, CNN",
            stats: {
                accuracy: "Multi-class",
                dataset: "Image Data",
                params: "CNN Arch"
            },
            description: "A Multi-class image recognition system built with Convolutional Neural Networks (CNNs). Utilizes data augmentation and dropout layers to optimize model performance on unstructured visual data.",
            learning: "Gained proficiency in handling unstructured visual data and implementing standard deep learning architectures.",
            github: "https://github.com/jeevananthan-98/image-classification"
        }
    ];

    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}
            >
                Selected <span className="text-accent">Works</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
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
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            textDecoration: 'none'
                        }}
                    >
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem' }}>⚡</span>
                            <span style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                border: '1px solid rgba(255,255,255,0.2)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '20px'
                            }}>
                                Project
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '1.5rem' }}>{project.type}</p>

                        <p style={{ marginBottom: '2rem', lineHeight: 1.6, opacity: 0.7, flexGrow: 1, fontSize: '0.95rem' }}>
                            {project.description}
                        </p>

                        <div style={{
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            fontSize: '0.85rem',
                            color: 'var(--secondary)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>{project.tech.split(',')[0]}</span>
                            <span className="text-accent" style={{ opacity: 0 }}>➜</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
