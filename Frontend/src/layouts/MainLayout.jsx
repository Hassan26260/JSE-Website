import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/MainLayout.css";

import { useLocation } from "react-router-dom";
import { ContactModalProvider } from "../context/ContactModalContext";
import ContactModal from "../components/ContactModal";
import ContactForm from "../components/ContactForm";
import InternshipForm from "../components/InternshipForm";
import StickyButton from "../components/StickyButton";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isInternshipRoute = location.pathname.includes('/internship');

  return (
    <ContactModalProvider>
      <div className="main-layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <ContactModal>
          {isInternshipRoute ? <InternshipForm /> : <ContactForm />}
        </ContactModal>
        <StickyButton />
      </div>
    </ContactModalProvider>
  );
};

export default MainLayout;

