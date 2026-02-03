import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const [counts, setCounts] = useState({ internships: 0, careers: 0 });
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchCounts = async () => {
            if (userInfo && userInfo.token) {
                try {
                    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

                    // Fetch both list to count them. 
                    // ideally backend should provide a /stats endpoint, but this works for now.
                    const [internRes, careerRes] = await Promise.all([
                        api.get('/intern-applications', config),
                        api.get('/career-applications', config)
                    ]);

                    setCounts({
                        internships: internRes.data.length,
                        careers: careerRes.data.length
                    });

                } catch (error) {
                    console.error("Error fetching stats:", error);
                }
            }
        };

        fetchCounts();
    }, [userInfo]);

    return (
        <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {/* Stat Card 1 */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Internship Applications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '0.5rem' }}>{counts.internships}</p>
                </div>
                {/* Stat Card 2 */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Career Applications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '0.5rem' }}>{counts.careers}</p>
                </div>
            </div>
            <div style={{ marginTop: '2rem', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>Welcome to JSE Admin Panel</h2>
                <p style={{ color: '#4b5563' }}>Use the sidebar to view detailed application lists.</p>
            </div>
        </div>
    );
};

export default Dashboard;
