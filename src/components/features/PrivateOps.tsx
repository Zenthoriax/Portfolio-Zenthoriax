'use client';

import { useState, useEffect } from 'react';

export function PrivateOps({ onClose }: { onClose: () => void }) {
    const [stage, setStage] = useState<'LOGIN' | 'DASHBOARD'>('LOGIN');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (res.ok) {
                setStage('DASHBOARD');
                setError(false);
            } else {
                setError(true);
                setTimeout(() => setError(false), 2000);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: 'rgba(5, 5, 5, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <button
                onClick={onClose}
                style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', opacity: 0.5, background: 'none', border: 'none', cursor: 'pointer' }}
            >
                EXIT OPS
            </button>

            {stage === 'LOGIN' ? (
                <form onSubmit={handleLogin} className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Restricted Access</h2>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>Identity</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={loading}
                            placeholder="Zenthoriax"
                            style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>Key</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: error ? '#ef4444' : 'var(--accent)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 600,
                            cursor: loading ? 'wait' : 'pointer',
                            transition: 'background 0.3s',
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {error ? 'ACCESS DENIED' : (loading ? 'VERIFYING...' : 'AUTHENTICATE')}
                    </button>
                </form>
            ) : (
                <Dashboard />
            )}
        </div>
    );
}

function Dashboard() {
    const [activeTab, setActiveTab] = useState('notes');
    const [notes, setNotes] = useState<any[]>([]);
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteContent, setNewNoteContent] = useState('');

    // Fetch notes on mount
    useEffect(() => {
        if (activeTab === 'notes') {
            fetch('/api/private/notes')
                .then(res => {
                    if (res.ok) return res.json();
                    throw new Error('Auth failed');
                })
                .then(data => setNotes(data))
                .catch(err => console.error(err));
        }
    }, [activeTab]);

    const handleCreateNote = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/private/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newNoteTitle, content: newNoteContent })
        });
        if (res.ok) {
            const note = await res.json();
            setNotes([note, ...notes]);
            setNewNoteTitle('');
            setNewNoteContent('');
        }
    };

    const inputStyle = {
        padding: '0.8rem',
        background: 'transparent',
        border: '1px solid var(--glass-border)',
        color: '#fff',
        borderRadius: '4px',
        width: '100%'
    };

    return (
        <div className="glass-panel" style={{ width: '90%', maxWidth: '1000px', height: '80vh', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <header style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="text-accent">Private Ops // Zenthoriax</h2>
                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>SECURE CONNECTION ACTIVE (DB CONNECTED)</div>
            </header>

            <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
                <aside style={{ width: '200px', borderRight: '1px solid var(--glass-border)', paddingRight: '1rem' }}>
                    <button onClick={() => setActiveTab('notes')} style={{ display: 'block', width: '100%', padding: '1rem', textAlign: 'left', background: activeTab === 'notes' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        Idea Drafts
                    </button>
                    <button onClick={() => setActiveTab('content')} style={{ display: 'block', width: '100%', padding: '1rem', textAlign: 'left', background: activeTab === 'content' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        Project Manager
                    </button>
                </aside>

                <main style={{ flex: 1, paddingLeft: '2rem', overflowY: 'auto' }}>
                    {activeTab === 'notes' && (
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Experimental Concepts</h3>

                            <form onSubmit={handleCreateNote} style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                                <input
                                    placeholder="New Idea Title..."
                                    value={newNoteTitle}
                                    onChange={e => setNewNoteTitle(e.target.value)}
                                    style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', background: 'transparent', border: '1px solid var(--glass-border)', color: '#fff' }}
                                />
                                <textarea
                                    placeholder="Details..."
                                    value={newNoteContent}
                                    onChange={e => setNewNoteContent(e.target.value)}
                                    style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', background: 'transparent', border: '1px solid var(--glass-border)', color: '#fff', minHeight: '60px' }}
                                />
                                <button type="submit" style={{ padding: '0.5rem 1rem', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>SAVE TO DB</button>
                            </form>

                            <ul style={{ listStyle: 'none', opacity: 0.8 }}>
                                {notes.map(note => (
                                    <li key={note.id} style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                                        <strong>{note.title}</strong>
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>{note.content}</p>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.4 }}>{new Date(note.created_at).toLocaleDateString()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'content' && (
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Project Manager</h3>

                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    // @ts-ignore
                                    const formData = new FormData(e.target);
                                    const data = Object.fromEntries(formData);

                                    await fetch('/api/private/projects', {
                                        method: 'POST',
                                        body: JSON.stringify(data)
                                    });
                                    alert('Project Added');
                                }}
                                style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', display: 'grid', gap: '1rem' }}
                            >
                                <input name="title" placeholder="Project Title" required style={inputStyle} />
                                <input name="type" placeholder="Type (e.g. Research)" required style={inputStyle} />
                                <input name="tech" placeholder="Tech Stack" required style={inputStyle} />
                                <input name="github" placeholder="GitHub URL" required style={inputStyle} />
                                <textarea name="description" placeholder="Description" required style={{ ...inputStyle, minHeight: '60px' }} />
                                <textarea name="learning" placeholder="Key Insight / Learning" required style={{ ...inputStyle, minHeight: '60px' }} />

                                <button type="submit" style={{ padding: '0.8rem', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>ADD PROJECT</button>
                            </form>

                            <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>
                                * This interface adds projects to the database table.
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
