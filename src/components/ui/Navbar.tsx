'use client';

// Simplified Navbar without hidden logic
export function Navbar() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '0.75rem 2rem',
                background: 'rgba(5, 5, 5, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '50px',
                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.5)',
            }}
        >
            {/* Nav Links */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                {['Projects', 'Skills', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            fontSize: '0.9rem',
                            opacity: 0.7,
                            fontWeight: 500,
                            transition: 'opacity 0.2s'
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
