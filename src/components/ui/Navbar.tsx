'use client';

// Simplified Navbar without hidden logic
export function Navbar() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            className="glass-panel"
            style={{
                position: 'fixed',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                height: 'var(--header-height)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 2rem',
                marginTop: '1rem'
            }}
        >
            {/* Logo Area */}
            <div
                onClick={scrollToTop}
                style={{
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
            >
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    Jeevananthan 
                </h2>
            </div>

            {/* Nav Links */}
            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#projects" style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Projects</a>
                <a href="#skills" style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Skills</a>
                <a href="#contact" style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Contact</a>
            </div>
        </nav>
    );
}
