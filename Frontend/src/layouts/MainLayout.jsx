import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/MainLayout.css";

import { ContactModalProvider } from "../context/ContactModalContext";
import ContactModal from "../components/ContactModal";
import ContactForm from "../components/ContactForm";
import StickyButton from "../components/StickyButton";

const MainLayout = ({ children }) => {
  return (
    <ContactModalProvider>
      <div className="main-layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <ContactModal>
          <ContactForm />
        </ContactModal>
        <StickyButton />
      </div>
    </ContactModalProvider>
  );
};

export default MainLayout;

