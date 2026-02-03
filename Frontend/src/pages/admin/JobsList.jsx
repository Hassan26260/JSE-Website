import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const JobsList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const { data } = await api.get('/jobs');
            if (Array.isArray(data)) {
                setJobs(data);
            } else {
                setJobs([]);
                console.error("Unexpected API response:", data);
                setError("Received invalid data from server.");
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;

        try {
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            await api.delete(`/jobs/${id}`, config);
            setJobs(jobs.filter(job => job._id !== id));
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    if (loading) return <div>Loading jobs...</div>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>Manage Jobs</h1>
                <Link
                    to="/admin/jobs/new"
                    style={{
                        backgroundColor: '#144AE0',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.875rem'
                    }}
                >
                    + Add New Job
                </Link>
            </div>

            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>Error: {error}</div>}

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <tr>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Title</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Type</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Location</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Salary</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ padding: '1.5rem', textAlign: 'center', color: '#6b7280' }}>No jobs found. Create one!</td>
                            </tr>
                        ) : (
                            jobs.map((job) => (
                                <tr key={job._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem 1.5rem', fontWeight: '500', color: '#111827' }}>{job.title}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>{job.type}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>{job.location}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>{job.salary}</td>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <Link
                                            to={`/admin/jobs/edit/${job._id}`}
                                            style={{ color: '#2563eb', fontWeight: '500', marginRight: '1rem', textDecoration: 'none' }}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            style={{ color: '#ef4444', fontWeight: '500', border: 'none', background: 'none', cursor: 'pointer' }}
                                        >
                                            Delete
                                        </button>
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

export default JobsList;
