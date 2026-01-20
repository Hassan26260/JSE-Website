import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { userInfo, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userInfo || !userInfo.isAdmin) {
        return <Navigate to="/admin/login" />;
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>JSE Admin</h2>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <a href="/admin/dashboard" style={{ display: 'block', padding: '0.75rem', color: '#e2e8f0', textDecoration: 'none', borderRadius: '4px', backgroundColor: '#334155' }}>
                                Dashboard
                            </a>
                        </li>
                        {/* Add more links here */}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <header style={{ backgroundColor: 'white', padding: '1rem 2rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <span style={{ marginRight: '1rem', fontWeight: '500' }}>{userInfo.name}</span>
                    <button
                        onClick={() => { window.location.href = '/ignore-this-logout-handled-in-context-actually-need-hook'; }}
                        style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', backgroundColor: 'transparent', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Logout
                    </button>
                </header>
                <main style={{ padding: '2rem', flex: 1 }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

// I need to fix the logout logic to use the hook.
// Since AdminLayout is a component, I can use the hook.
import { useNavigate } from 'react-router-dom';

const AdminLayoutFixed = () => {
    const { userInfo, loading, logout } = useAuth();
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (!userInfo || !userInfo.isAdmin) return <Navigate to="/admin/login" />;

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
            <aside style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>JSE Admin</h2>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <a href="/admin/dashboard" style={{ display: 'block', padding: '0.75rem', color: '#e2e8f0', textDecoration: 'none', borderRadius: '4px', backgroundColor: '#334155' }}>
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <header style={{ backgroundColor: 'white', padding: '1rem 2rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <span style={{ marginRight: '1rem', fontWeight: '500', color: '#333' }}>{userInfo.name}</span>
                    <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', backgroundColor: 'white', borderRadius: '4px', cursor: 'pointer', color: '#ef4444' }}>
                        Logout
                    </button>
                </header>
                <main style={{ padding: '2rem', flex: 1 }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayoutFixed;
