import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { motion } from 'framer-motion';
import '../styles/BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the blog that matches the URL param
    const post = blogData.find(b => b.id === id);

    if (!post) {
        return (
            <div className="blog-post-not-found">
                <h2>Article Not Found</h2>
                <button onClick={() => navigate('/blog')} className="back-to-blogs-btn">Back to All Blogs</button>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            {/* Massive Hero Image Section */}
            <div className="blog-post-hero">
                <img src={post.image} alt={post.title} className="blog-hero-image" />
                <div className="blog-hero-overlay"></div>
                <div className="blog-hero-content">
                    <motion.div
                        className="blog-post-category-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {post.category}
                    </motion.div>
                    <motion.h1
                        className="blog-post-main-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {post.title}
                    </motion.h1>
                </div>
            </div>

            {/* Rich Text Reading Section */}
            <div className="blog-post-reading-container">
                <motion.div
                    className="blog-post-content-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Injecting the raw HTML content from blogData */}
                    <div
                        className="rich-text-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="blog-post-footer">
                        <button onClick={() => navigate('/blog')} className="back-to-blogs-btn-glass">
                            ← Return to Blog List
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPost;
