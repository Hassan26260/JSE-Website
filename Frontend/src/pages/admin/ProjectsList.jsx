import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await api.get('/projects');
            setProjects(data);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;

        try {
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            await api.delete(`/projects/${id}`, config);
            setProjects(projects.filter(p => p._id !== id));
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    const filteredProjects = projects.filter(project => {
        const term = searchTerm.toLowerCase();
        return (
            project.title.toLowerCase().includes(term) ||
            project.category.toLowerCase().includes(term) ||
            (project.subCategory && project.subCategory.toLowerCase().includes(term)) ||
            project.country.toLowerCase().includes(term)
        );
    });

    if (loading) return <div>Loading projects...</div>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>Manage Portfolio</h1>
                <Link
                    to="/admin/projects/new"
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
                    + Add New Project
                </Link>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <input
                    type="text"
                    placeholder="Search by Title, Category, or Country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                    }}
                />
            </div>

            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>Error: {error}</div>}

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <tr>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Title</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Category</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Country</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Image</th>
                            <th style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProjects.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ padding: '1.5rem', textAlign: 'center', color: '#6b7280' }}>No projects found.</td>
                            </tr>
                        ) : (
                            filteredProjects.map((project) => (
                                <tr key={project._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem 1.5rem', fontWeight: '500', color: '#111827' }}>{project.title}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>
                                        {project.category}
                                        {project.subCategory && <span style={{ fontSize: '0.8em', color: '#888', display: 'block' }}>{project.subCategory}</span>}
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>{project.country}</td>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        {project.image && (
                                            <img
                                                src={`http://localhost:5000${project.image}`}
                                                alt="thumb"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/50' }}
                                            />
                                        )}
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <Link
                                            to={`/admin/projects/edit/${project._id}`}
                                            style={{ color: '#2563eb', fontWeight: '500', marginRight: '1rem', textDecoration: 'none' }}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project._id)}
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

export default ProjectsList;
