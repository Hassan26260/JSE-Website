import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Internship from "./pages/Internship";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Service pages
import VirtualTeam from "./pages/services/VirtualTeam";
import SecondmentTeam from "./pages/services/SecondmentTeam";
import DesignEngineeringProjects from "./pages/services/DesignEngineeringProjects";

// Design service pages
import ArchitecturalBIM from "./pages/services/design/ArchitecturalBIM";
import SteelStructureDetailing from "./pages/services/design/SteelStructureDetailing";
import MEPDesign from "./pages/services/design/MEPDesign";
import PlumbingPublicHealth from "./pages/services/design/PlumbingPublicHealth";
import HVACDesign from "./pages/services/design/HVACDesign";
import FirefightingDesign from "./pages/services/design/FirefightingDesign";

import Structural from "./pages/services/design/Structural";
import ElectricalSystemDesign from "./pages/services/design/ElectricalSystemDesign";
import ELV from "./pages/services/design/ELV";

// Industry pages
import Healthcare from "./pages/industries/Healthcare";
import Architecture from "./pages/industries/Architecture";
import Builders from "./pages/industries/Builders";
import GeneralContracting from "./pages/industries/GeneralContracting";
import Manufacturing from "./pages/industries/Manufacturing";
import Skyscrapers from "./pages/industries/Skyscrapers";
import Engineering from "./pages/industries/Engineering";
import Educational from "./pages/industries/Educational";
import IndustrialInfrastructure from "./pages/industries/IndustrialInfrastructure";
import WhoWeAre from './pages/WhoWeAre';
import VisionMission from './pages/VisionMission';
import History from './pages/History';

// Internship pages
import CivilEngineering from "./pages/internship/CivilEngineering";
import MechanicalEngineering from "./pages/internship/MechanicalEngineering";
import ElectricalElectronicsEngineering from "./pages/internship/ElectricalElectronicsEngineering";

import MechatronicsEngineering from "./pages/internship/MechatronicsEngineering";
import Architectural from "./pages/internship/Architectural";


// Admin Imports
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import InternshipApplications from "./pages/admin/InternshipApplications";
import CareerApplications from "./pages/admin/CareerApplications";
import JobsList from "./pages/admin/JobsList";
import JobForm from "./pages/admin/JobForm";
import ProjectsList from "./pages/admin/ProjectsList";
import ProjectForm from "./pages/admin/ProjectForm";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<JobsList />} />
            <Route path="jobs/new" element={<JobForm />} />
            <Route path="jobs/edit/:id" element={<JobForm />} />
            <Route path="projects" element={<ProjectsList />} />
            <Route path="projects/new" element={<ProjectForm />} />
            <Route path="projects/edit/:id" element={<ProjectForm />} />
            <Route path="internships" element={<InternshipApplications />} />
            <Route path="careers" element={<CareerApplications />} />
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
          <Route path="/internship" element={<MainLayout><Internship /></MainLayout>} />
          <Route path="/career" element={<MainLayout><Career /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />

          {/* Service routes */}
          <Route path="/services/virtual-team" element={<MainLayout><VirtualTeam /></MainLayout>} />
          <Route path="/services/secondment-team" element={<MainLayout><SecondmentTeam /></MainLayout>} />
          <Route path="/services/design" element={<MainLayout><DesignEngineeringProjects /></MainLayout>} />

          {/* Industry routes */}
          <Route path="/industries/healthcare" element={<MainLayout><Healthcare /></MainLayout>} />
          <Route path="/industries/architecture" element={<MainLayout><Architecture /></MainLayout>} />
          <Route path="/industries/builders" element={<MainLayout><Builders /></MainLayout>} />
          <Route path="/industries/general-contracting" element={<MainLayout><GeneralContracting /></MainLayout>} />
          <Route path="/industries/manufacturing" element={<MainLayout><Manufacturing /></MainLayout>} />
          <Route path="/industries/skyscrapers" element={<MainLayout><Skyscrapers /></MainLayout>} />
          <Route path="/industries/engineering" element={<MainLayout><Engineering /></MainLayout>} />
          <Route path="/industries/educational" element={<MainLayout><Educational /></MainLayout>} />
          <Route path="/industries/industrial" element={<MainLayout><IndustrialInfrastructure /></MainLayout>} />
          <Route path="/who-we-are" element={<MainLayout><WhoWeAre /></MainLayout>} />
          <Route path="/vision-mission" element={<MainLayout><VisionMission /></MainLayout>} />
          <Route path="/history" element={<MainLayout><History /></MainLayout>} />

          {/* Design service routes */}
          <Route path="/services/design/architectural-bim" element={<MainLayout><ArchitecturalBIM /></MainLayout>} />
          <Route path="/services/design/steel-structure-detailing" element={<MainLayout><SteelStructureDetailing /></MainLayout>} />
          <Route path="/services/design/mep-design" element={<MainLayout><MEPDesign /></MainLayout>} />
          <Route path="/services/design/plumbing-public-health" element={<MainLayout><PlumbingPublicHealth /></MainLayout>} />
          <Route path="/services/design/hvac-design" element={<MainLayout><HVACDesign /></MainLayout>} />
          <Route path="/services/design/firefighting-design" element={<MainLayout><FirefightingDesign /></MainLayout>} />
          <Route path="/services/design/structural" element={<MainLayout><Structural /></MainLayout>} />
          <Route path="/services/design/electrical-system-design" element={<MainLayout><ElectricalSystemDesign /></MainLayout>} />
          <Route path="/services/design/elv" element={<MainLayout><ELV /></MainLayout>} />

          {/* Internship routes */}
          <Route path="/internship/civil-engineering" element={<MainLayout><CivilEngineering /></MainLayout>} />
          <Route path="/internship/mechanical-engineering" element={<MainLayout><MechanicalEngineering /></MainLayout>} />
          <Route path="/internship/electrical-electronics-engineering" element={<MainLayout><ElectricalElectronicsEngineering /></MainLayout>} />

          <Route path="/internship/mechatronics-engineering" element={<MainLayout><MechatronicsEngineering /></MainLayout>} />
          <Route path="/internship/architectural" element={<MainLayout><Architectural /></MainLayout>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
