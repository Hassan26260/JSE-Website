import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Design service pages
import ArchitecturalBIM from "./pages/services/design/ArchitecturalBIM";
import SteelStructureDetailing from "./pages/services/design/SteelStructureDetailing";
import MEPDesign from "./pages/services/design/MEPDesign";
import PlumbingPublicHealth from "./pages/services/design/PlumbingPublicHealth";
import HVACDesign from "./pages/services/design/HVACDesign";
import FirefightingDesign from "./pages/services/design/FirefightingDesign";
import BIMModelling from "./pages/services/design/BIMModelling";
import ElectricalSystemDesign from "./pages/services/design/ElectricalSystemDesign";
import ELV from "./pages/services/design/ELV";

// Internship pages
import CivilEngineering from "./pages/internship/CivilEngineering";
import MechanicalEngineering from "./pages/internship/MechanicalEngineering";
import ElectricalElectronicsEngineering from "./pages/internship/ElectricalElectronicsEngineering";
import ElectronicsCommunicationEngineering from "./pages/internship/ElectronicsCommunicationEngineering";
import MechatronicsEngineering from "./pages/internship/MechatronicsEngineering";
import Architectural from "./pages/internship/Architectural";
import StructuralEnvironmentalEngineering from "./pages/internship/StructuralEnvironmentalEngineering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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

        {/* Design service routes */}
        <Route path="/services/design/architectural-bim" element={<MainLayout><ArchitecturalBIM /></MainLayout>} />
        <Route path="/services/design/steel-structure-detailing" element={<MainLayout><SteelStructureDetailing /></MainLayout>} />
        <Route path="/services/design/mep-design" element={<MainLayout><MEPDesign /></MainLayout>} />
        <Route path="/services/design/plumbing-public-health" element={<MainLayout><PlumbingPublicHealth /></MainLayout>} />
        <Route path="/services/design/hvac-design" element={<MainLayout><HVACDesign /></MainLayout>} />
        <Route path="/services/design/firefighting-design" element={<MainLayout><FirefightingDesign /></MainLayout>} />
        <Route path="/services/design/bim-modelling" element={<MainLayout><BIMModelling /></MainLayout>} />
        <Route path="/services/design/electrical-system-design" element={<MainLayout><ElectricalSystemDesign /></MainLayout>} />
        <Route path="/services/design/elv" element={<MainLayout><ELV /></MainLayout>} />

        {/* Internship routes */}
        <Route path="/internship/civil-engineering" element={<MainLayout><CivilEngineering /></MainLayout>} />
        <Route path="/internship/mechanical-engineering" element={<MainLayout><MechanicalEngineering /></MainLayout>} />
        <Route path="/internship/electrical-electronics-engineering" element={<MainLayout><ElectricalElectronicsEngineering /></MainLayout>} />
        <Route path="/internship/electronics-communication-engineering" element={<MainLayout><ElectronicsCommunicationEngineering /></MainLayout>} />
        <Route path="/internship/mechatronics-engineering" element={<MainLayout><MechatronicsEngineering /></MainLayout>} />
        <Route path="/internship/architectural" element={<MainLayout><Architectural /></MainLayout>} />
        <Route path="/internship/structural-environmental-engineering" element={<MainLayout><StructuralEnvironmentalEngineering /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
