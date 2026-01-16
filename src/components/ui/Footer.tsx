'use client';

export function Footer() {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.8rem', borderTop: '1px solid var(--glass-border)' }}>
            <p>
                &copy; {new Date().getFullYear()} Jeevananthan S. All rights reserved.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
                Built with Next.js, Three.js, and Matter.js pseudo-physics.
            </div>
            <div style={{ marginTop: '2rem', fontSize: '0.7rem', opacity: 0.5 }}>
                System Normal
            </div>
        </footer>
    );
}
