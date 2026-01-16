'use client';

import { useState } from 'react';
import { useLongPress } from '@/hooks/useLongPress';
import { PrivateOps } from '@/components/features/PrivateOps';

export function Footer() {
    const [isHiddenMode, setIsHiddenMode] = useState(false);

    // Hidden trigger logic moved here
    const onLongPress = () => {
        setIsHiddenMode(true);
    };

    // No-op for click
    const onClick = () => { };

    const longPressEvent = useLongPress(onLongPress, onClick, { delay: 4000 });

    return (
        <>
            <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.8rem', borderTop: '1px solid var(--glass-border)' }}>
                <p>
                    &copy; {new Date().getFullYear()} Jeevananthan S. All rights reserved.
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                    Built with Next.js, Three.js, and Matter.js pseudo-physics.
                </div>

                {/* Hidden Trigger Area - The 'System Status' text */}
                <div
                    {...longPressEvent}
                    style={{
                        marginTop: '2rem',
                        display: 'inline-block',
                        cursor: 'default',
                        userSelect: 'none',
                        fontSize: '0.7rem',
                        opacity: 0.5
                    }}
                >
                    System Normal
                </div>
            </footer>

            {isHiddenMode && <PrivateOps onClose={() => setIsHiddenMode(false)} />}
        </>
    );
}
