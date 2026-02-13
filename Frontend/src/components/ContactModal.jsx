import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useContactModal } from '../context/ContactModalContext';
import '../styles/StickyContact.css'; // Reusing existing styles for modal overlay

const ContactModal = ({ children }) => {
    const { isModalOpen, closeModal } = useContactModal();
    const modalRef = useRef(null);

    if (!isModalOpen) return null;

    return createPortal(
        <div
            className={`contact-modal-overlay ${isModalOpen ? 'open' : ''}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
            }}
        >
            <div className="contact-modal-content">
                <button className="modal-close-btn" onClick={closeModal}>&times;</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
