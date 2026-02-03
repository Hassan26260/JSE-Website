import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const JobForm = () => {
    const { id } = useParams();
    const isEditMode = !!id;
    const navigate = useNavigate();
    const { userInfo } = useAuth();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        type: 'Full Time',
        location: '',
        salary: '',
        desc: '',
        // Details
        roleOverview: '',
        responsibilities: [''],
        qualifications: [''],
        experience: '2+ Years',
        freshers: false
    });

    useEffect(() => {
        if (isEditMode) {
            fetchJob();
        }
    }, [id]);

    const fetchJob = async () => {
        try {
            setLoading(true);
            const { data } = await api.get(`/jobs/${id}`);
            // Flat the structure for form
            setFormData({
                title: data.title,
                type: data.type,
                location: data.location,
                salary: data.salary,
                desc: data.desc,
                roleOverview: data.details.roleOverview,
                responsibilities: data.details.responsibilities,
                qualifications: data.details.qualifications,
                experience: data.details.experience,
                freshers: data.details.freshers
            });
        } catch (error) {
            console.error(error);
            alert("Failed to fetch job details");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Array Fields (Responsibilities/Qualifications)
    const handleArrayChange = (index, value, field) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({ ...formData, [field]: newArray });
    };

    const addArrayItem = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ''] });
    };

    const removeArrayItem = (index, field) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: newArray });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            title: formData.title,
            type: formData.type,
            location: formData.location,
            salary: formData.salary,
            desc: formData.desc,
            details: {
                roleOverview: formData.roleOverview,
                responsibilities: formData.responsibilities.filter(i => i.trim() !== ''),
                qualifications: formData.qualifications.filter(i => i.trim() !== ''),
                experience: formData.experience,
                freshers: formData.freshers
            }
        };

        try {
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

            if (isEditMode) {
                await api.put(`/jobs/${id}`, payload, config);
                alert("Job updated successfully!");
            } else {
                await api.post('/jobs', payload, config);
                alert("Job created successfully!");
            }
            navigate('/admin/jobs');
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (loading && isEditMode && !formData.title) return <div>Loading...</div>;

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        marginBottom: '1rem'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '500',
        color: '#374151'
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                {isEditMode ? 'Edit Job' : 'Create New Job'}
            </h1>

            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {/* Basic Info */}
                <h3 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#144AE0' }}>Basic Info</h3>

                <label style={labelStyle}>Job Title</label>
                <input required name="title" value={formData.title} onChange={handleChange} style={inputStyle} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Type</label>
                        <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                    <div>
                        <label style={labelStyle}>Location</label>
                        <select name="location" value={formData.location} onChange={handleChange} style={inputStyle}>
                            <option value="">Select Location</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Tirunelveli">Tirunelveli</option>
                            <option value="Trichy">Trichy</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Salary Range</label>
                        <input required name="salary" value={formData.salary} onChange={handleChange} style={inputStyle} placeholder="e.g. $40k-50k" />
                    </div>
                    <div>
                        <label style={labelStyle}>Experience Required</label>
                        <input required name="experience" value={formData.experience} onChange={handleChange} style={inputStyle} />
                    </div>
                </div>

                <label style={labelStyle}>Short Description (Card)</label>
                <textarea required name="desc" value={formData.desc} onChange={handleChange} maxLength="200" style={{ ...inputStyle, height: '80px' }} />

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" checked={formData.freshers} onChange={(e) => setFormData({ ...formData, freshers: e.target.checked })} />
                        Freshers can apply?
                    </label>
                </div>

                {/* Detailed Info */}
                <h3 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '1.5rem', color: '#144AE0' }}>Page Details</h3>

                <label style={labelStyle}>Role Overview</label>
                <textarea required name="roleOverview" value={formData.roleOverview} onChange={handleChange} style={{ ...inputStyle, height: '100px' }} />

                {/* Dynamic Responsibilities */}
                <label style={labelStyle}>Responsibilities</label>
                {formData.responsibilities.map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input
                            value={item}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'responsibilities')}
                            style={{ ...inputStyle, marginBottom: 0 }}
                        />
                        <button type="button" onClick={() => removeArrayItem(index, 'responsibilities')} style={{ color: 'red', border: '1px solid #fee2e2', backgroundColor: '#fee2e2', borderRadius: '4px', cursor: 'pointer', padding: '0 1rem' }}>X</button>
                    </div>
                ))}
                <button type="button" onClick={() => addArrayItem('responsibilities')} style={{ marginBottom: '1.5rem', color: '#2563eb', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>+ Add Responsibility</button>


                {/* Dynamic Qualifications */}
                <label style={labelStyle}>Qualifications</label>
                {formData.qualifications.map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input
                            value={item}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'qualifications')}
                            style={{ ...inputStyle, marginBottom: 0 }}
                        />
                        <button type="button" onClick={() => removeArrayItem(index, 'qualifications')} style={{ color: 'red', border: '1px solid #fee2e2', backgroundColor: '#fee2e2', borderRadius: '4px', cursor: 'pointer', padding: '0 1rem' }}>X</button>
                    </div>
                ))}
                <button type="button" onClick={() => addArrayItem('qualifications')} style={{ marginBottom: '1.5rem', color: '#2563eb', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>+ Add Qualification</button>


                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button type="submit" disabled={loading} style={{ flex: 1, padding: '1rem', backgroundColor: '#144AE0', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                        {loading ? 'Saving...' : (isEditMode ? 'Update Job' : 'Create Job')}
                    </button>
                    <button type="button" onClick={() => navigate('/admin/jobs')} style={{ flex: 1, padding: '1rem', backgroundColor: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    );
};

export default JobForm;
