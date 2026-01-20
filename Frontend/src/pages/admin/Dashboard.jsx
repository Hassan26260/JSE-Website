const Dashboard = () => {
    return (
        <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {/* Stat Card 1 */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Internships</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '0.5rem' }}>0</p>
                </div>
                {/* Stat Card 2 */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Applications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '0.5rem' }}>0</p>
                </div>
            </div>
            <div style={{ marginTop: '2rem', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>Welcome to JSE Admin Panel</h2>
                <p style={{ color: '#4b5563' }}>Manage your website content and applications from here.</p>
            </div>
        </div>
    );
};

export default Dashboard;
