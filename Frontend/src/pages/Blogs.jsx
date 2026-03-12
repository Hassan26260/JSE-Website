import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Blogs.css';

const Blogs = () => {
    const [filter, setFilter] = useState('All');
    const [filteredBlogs, setFilteredBlogs] = useState(blogData);

    const categories = [
        'All',
        'JSE Engineering',
        'Internship',
        'Architecture Service',
        'Engineering Services',
        'Steel Detailing Services'
    ];

    useEffect(() => {
        if (filter === 'All') {
            setFilteredBlogs(blogData);
        } else {
            setFilteredBlogs(blogData.filter(blog => blog.category === filter));
        }
    }, [filter]);

    return (
        <div className="blogs-page">
            <div className="blogs-header-container">
                <div className="blogs-header-content">
                    <motion.h1
                        className="blogs-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Blog
                    </motion.h1>

                    <motion.div
                        className="blogs-filter-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="custom-select-wrapper">
                            <select
                                className="blogs-filter-dropdown"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                {categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="blogs-grid-container">
                <motion.div layout className="blogs-grid">
                    <AnimatePresence>
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="blog-card"
                            >
                                <Link to={`/blog/${blog.id}`} className="blog-card-link">
                                    <div className="blog-card-image-box">
                                        <img src={blog.image} alt={blog.title} className="blog-card-img" loading="lazy" />
                                        <div className="blog-card-category-badge">{blog.category}</div>
                                    </div>
                                    <div className="blog-card-body">
                                        <h3 className="blog-card-heading">{blog.title}</h3>
                                        <p className="blog-card-desc">{blog.shortDesc}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {filteredBlogs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="no-blogs-message"
                        >
                            <p>No articles found for this category yet.</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Blogs;
