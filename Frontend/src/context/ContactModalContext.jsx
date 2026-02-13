import { createContext, useState, useContext } from 'react';

const ContactModalContext = createContext();

export const ContactModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <ContactModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </ContactModalContext.Provider>
    );
};

export const useContactModal = () => useContext(ContactModalContext);
