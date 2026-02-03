import { Outlet, Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { userInfo, loading, logout } = useAuth();
    const navigate = useNavigate();

    // Show loading state while checking auth
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                Loading...
            </div>
        );
    }

    // Redirect to login if not authenticated or not admin
    if (!userInfo || !userInfo.isAdmin) {
        return <Navigate to="/admin/login" replace />;
    }

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const linkStyle = {
        display: 'block',
        padding: '0.75rem 1rem',
        color: '#e2e8f0',
        textDecoration: 'none',
        borderRadius: '4px',
        marginBottom: '0.5rem',
        transition: 'background-color 0.2s'
    };

    const activeLinkStyle = {
        ...linkStyle,
        backgroundColor: '#334155',
        fontWeight: '500'
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            {/* Sidebar */}
            <aside style={{ width: '260px', backgroundColor: '#1e293b', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #334155' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>JSE Admin</h2>
                </div>

                <nav style={{ flex: 1, padding: '1.5rem 1rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>
                            <Link to="/admin/dashboard" style={activeLinkStyle}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/projects" style={linkStyle}>
                                Manage Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/jobs" style={linkStyle}>
                                Manage Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/internships" style={linkStyle}>
                                Internship Applications
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/careers" style={linkStyle}>
                                Career Applications
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div style={{ padding: '1.5rem', borderTop: '1px solid #334155' }}>
                    <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Logged in as:</div>
                    <div style={{ fontWeight: '500', marginTop: '0.25rem' }}>{userInfo.name}</div>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Header */}
                <header style={{
                    backgroundColor: 'white',
                    padding: '1rem 2rem',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '64px'
                }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '0.5rem 1rem',
                            border: '1px solid #fee2e2',
                            backgroundColor: '#fee2e2',
                            color: '#ef4444',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                        }}
                    >
                        Logout
                    </button>
                </header>

                {/* Page Content */}
                <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
