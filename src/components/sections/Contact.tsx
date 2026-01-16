'use client';

export function Contact() {
    return (
        <section id="contact" className="section container" style={{ minHeight: '40vh', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Get in Touch</h2>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', fontSize: '1.5rem', fontWeight: 300 }}>
                <a
                    href="https://www.linkedin.com/in/jeevananthan-senthilkumar-48b814325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                    style={{ textDecoration: 'none' }}
                >
                    Jeevananthan
                </a>

                <a
                    href="https://github.com/Zenthoriax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                    style={{ textDecoration: 'none' }}
                >
                    Zenthoriax
                </a>

                <a
                    href="mailto:jeevananthan9806@gmail.com"
                    className="text-accent"
                    style={{ textDecoration: 'none' }}
                >
                    jeevananthan9806@gmail.com
                </a>
            </div>
        </section>
    );
}
