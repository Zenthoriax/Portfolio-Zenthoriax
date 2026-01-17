'use client';

export function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 'clamp(0.75rem, 2vw, 1.5rem)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'min(90%, 600px)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1rem, 3vw, 2rem)',
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 2rem)',
                background: 'rgba(5, 5, 5, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '50px',
                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.5)',
            }}
        >
            {/* Nav Links */}
            <div style={{
                display: 'flex',
                gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                width: '100%',
                justifyContent: 'center'
            }}>
                {['Projects', 'Skills', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                            opacity: 0.7,
                            fontWeight: 500,
                            transition: 'opacity 0.2s',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
}
