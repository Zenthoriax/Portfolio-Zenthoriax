'use client';

function ProjectCard({ title, type, tech, description, learning, github }: { title: string, type: string, tech: string, description: string, learning: string, github: string }) {
    return (
        <a
            href={github}
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
                transition: 'transform 0.2s, box-shadow 0.2s'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="text-accent" style={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {type}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>↗</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                {description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.9 }}>Key Insight:</p>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6 }}>{learning}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.5, fontFamily: 'monospace' }}>
                    {tech}
                </p>
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
            description: "An exploratory system design for disease vector control (mosquitoes) using hyper-local data. Focused on architectural constraints and data flow rather than just model accuracy.",
            learning: "Learned the importance of sensor placement and data granularity in environmental monitoring systems.",
            github: "https://github.com/Zenthoriax"
        },
        {
            title: "Groundwater Level Prediction",
            type: "Forecasting System",
            tech: "XGBoost, Python, Time-Series",
            description: "Regression system attempting real-time groundwater level forecasting based on sensor data. Utilized XGBoost for processing sequential environmental inputs.",
            learning: "Highlighting the preprocessing challenges in real-world time-series sensor data.",
            github: "https://github.com/Zenthoriax"
        },
        {
            title: "Fashion-MNIST Classifier",
            type: "Computer Vision",
            tech: "TensorFlow, Keras, Streamlit",
            description: "End-to-end image classification pipeline deployed via Streamlit. A study in CNN architecture basics and serving models to a web interface.",
            learning: "Understanding the gap between a trained notebook model and a deployed interactive application.",
            github: "https://github.com/Zenthoriax"
        },
        {
            title: "Personal Finance Tracker",
            type: "Full Stack App",
            tech: "PostgreSQL, Docker, Full-Stack",
            description: "A dockerized expense tracking system with a persistent database backend. Built to understand data persistence and containerization.",
            learning: "Gained practical experience with Dockerizing stateful applications and managing database schemas.",
            github: "https://github.com/Zenthoriax"
        },
        {
            title: "Multi-Agent Debate System",
            type: "LLM Orchestration",
            tech: "LangChain, Python, OpenAI API",
            description: "A framework where multiple LLM agents debate a topic to reach a consensus or explore diverse viewpoints. Implements a moderator agent to guide discourse.",
            learning: "Explored prompt engineering patterns for agent interactions and state management in LLM workflows.",
            github: "https://github.com/Zenthoriax"
        },
        {
            title: "Autonomous Drone Pathing",
            type: "Robotics Simulation",
            tech: "ROS2, Gazebo, C++",
            description: "Simulation environment for drone obstacle avoidance in complex terrains using LiDAR data. Focus on reactive path planning algorithms.",
            learning: "Applied control theory basics and robotic operating system communication patterns in a simulated physics environment.",
            github: "https://github.com/Zenthoriax"
        }
    ];

    return (
        <section id="projects" className="section container">
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Explorations</h2>
            <p style={{ opacity: 0.7, marginBottom: '4rem', maxWidth: '600px' }}>
                My work is focused on understanding systems. These projects represent steps in learning how to move from theory to deployment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
