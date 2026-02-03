import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const CareerApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                // Manually adding token header
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };

                const { data } = await api.get('/career-applications', config);
                setApplications(data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo && userInfo.token) {
            fetchApplications();
        }
    }, [userInfo]);

    if (loading) return <div>Loading applications...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Career Applications</h1>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <tr>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Name</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Job Title</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Contact</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Date</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ padding: '1.5rem', textAlign: 'center', color: '#6b7280' }}>No career applications found.</td>
                            </tr>
                        ) : (
                            applications.map((app) => (
                                <tr key={app._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem 1.5rem', color: '#111827' }}>{app.name}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>{app.jobTitle || 'N/A'}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>
                                        <div>{app.email}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>{app.mobile}</div>
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>
                                        {new Date(app.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <a
                                            href={`http://localhost:5000/${app.resume}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ color: '#2563eb', textDecoration: 'none' }}
                                        >
                                            View Resume
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CareerApplications;
