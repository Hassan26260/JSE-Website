import { useState, useEffect } from 'react';
import { useContactModal } from '../context/ContactModalContext';
import '../styles/StickyContact.css';

const StickyButton = () => {
    const { openModal } = useContactModal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down a bit (e.g. > 50% viewport of 1st section approx or just 300px)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`sticky-contact-btn ${isVisible ? 'visible' : ''}`}
            onClick={openModal}
            aria-label="Open Contact Form"
        >
            <svg className="sticky-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="white" fillOpacity="0.2" />
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="white" />
            </svg>
        </button>
    );
};

export default StickyButton;
