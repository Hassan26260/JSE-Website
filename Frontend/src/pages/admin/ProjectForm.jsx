import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'MEP',
        subCategory: '',
        country: 'OTHERS',
        description: '',
        image: '',
        gallery: []
    });
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    const isEditMode = !!id;

    useEffect(() => {
        if (isEditMode) {
            fetchProject();
        }
    }, [id]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            const { data } = await api.get(`/projects/${id}`);
            setFormData(data);
        } catch (err) {
            setError("Failed to fetch project details.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formDataVideo = new FormData();
        formDataVideo.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            };

            // We need to use axios directly or api instance if it handles formData correctly
            // api instance has default json content type typically, but axios detects formData
            const { data } = await api.post('/projects/upload', formDataVideo, config);

            // Determine if this is main image or gallery
            // For simplicity, let's just say the first upload is main, subsequent are gallery?
            // Or just specific buttons. Let's make this the MAIN IMAGE uploader.
            setFormData(prev => ({ ...prev, image: data.filePath }));

        } catch (error) {
            console.error(error);
            alert('File upload failed');
        } finally {
            setUploading(false);
        }
    };

    // Gallery Uploader (simplified logic for now, reusing same endpoint)
    // Real implementation should probably allow multiple selection
    const handleGalleryUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fd = new FormData();
        fd.append('image', file);
        setUploading(true);

        try {
            const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${userInfo.token}` } };
            const { data } = await api.post('/projects/upload', fd, config);

            setFormData(prev => ({ ...prev, gallery: [...prev.gallery, data.filePath] }));
        } catch (err) {
            alert('Gallery upload failed');
        } finally {
            setUploading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            if (isEditMode) {
                await api.put(`/projects/${id}`, formData, config);
            } else {
                await api.post('/projects', formData, config);
            }
            navigate('/admin/projects');
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #d1d5db',
        marginBottom: '1rem',
        fontSize: '0.875rem'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '500',
        color: '#374151',
        fontSize: '0.875rem'
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                {isEditMode ? 'Edit Project' : 'Create New Project'}
            </h1>

            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)' }}>

                <div>
                    <label style={labelStyle}>Project Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            style={inputStyle}
                        >
                            <option value="MEP">MEP</option>
                            <option value="Architectural & Structural">Architectural & Structural</option>
                            <option value="Steel Structural Detailing">Steel Structural Detailing</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Country</label>
                        <select
                            name="country"
                            value={["UAE", "SAUDI ARABIA", "DUBAI", "MALAYSIA", "OTHERS"].includes(formData.country) ? formData.country : "ADD_NEW"}
                            onChange={(e) => {
                                if (e.target.value === "ADD_NEW") {
                                    setFormData({ ...formData, country: "" });
                                } else {
                                    setFormData({ ...formData, country: e.target.value });
                                }
                            }}
                            style={inputStyle}
                        >
                            <option value="OTHERS">Others</option>
                            <option value="UAE">UAE</option>
                            <option value="SAUDI ARABIA">Saudi Arabia</option>
                            <option value="DUBAI">Dubai</option>
                            <option value="MALAYSIA">Malaysia</option>
                            <option value="ADD_NEW">+ Add New Country</option>
                        </select>
                        {(!["UAE", "SAUDI ARABIA", "DUBAI", "MALAYSIA", "OTHERS"].includes(formData.country)) && (
                            <input
                                type="text"
                                placeholder="Enter Custom Country Name"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                style={{ ...inputStyle, marginTop: '0.5rem', borderColor: '#144AE0' }}
                            />
                        )}
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Sub-Category (Optional, mostly for MEP)</label>
                    <input
                        type="text"
                        name="subCategory"
                        value={formData.subCategory}
                        onChange={handleChange}
                        placeholder="e.g., Hospitals, Hotels"
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        style={inputStyle}
                    ></textarea>
                </div>

                {/* Main Image Upload */}
                <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <label style={labelStyle}>Main Image</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        style={inputStyle}
                    />
                    <input type="file" onChange={handleUpload} style={{ marginBottom: '0.5rem' }} />
                    {uploading && <p>Uploading...</p>}
                    {formData.image && (
                        <div style={{ marginTop: '0.5rem' }}>
                            <p style={{ fontSize: '0.8rem' }}>Preview:</p>
                            <img src={`http://localhost:5000${formData.image}`} alt="Preview" style={{ height: '100px', borderRadius: '4px' }} />
                        </div>
                    )}
                </div>

                {/* Gallery Upload - Simplified */}
                <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <label style={labelStyle}>Gallery Images (Add one by one)</label>
                    <input type="file" onChange={handleGalleryUpload} />
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        {formData.gallery.map((img, idx) => (
                            <div key={idx} style={{ position: 'relative' }}>
                                <img src={`http://localhost:5000${img}`} alt="gal" style={{ height: '60px', borderRadius: '4px' }} />
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newGal = formData.gallery.filter((_, i) => i !== idx);
                                        setFormData({ ...formData, gallery: newGal });
                                    }}
                                    style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', border: 'none', cursor: 'pointer', fontSize: '10px' }}
                                >X</button>
                            </div>
                        ))}
                    </div>
                </div>


                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#144AE0',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            flex: 1
                        }}
                    >
                        {isEditMode ? 'Update Project' : 'Create Project'}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/admin/projects')}
                        style={{
                            backgroundColor: '#9ca3af',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
