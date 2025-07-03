import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Scroll from "./components/Scroll"; // Bouton retour en haut
import Card from "./pages/Card"; // Page de redirection pour les routes inconnues

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Card />} />{" "}
        {/* Redirection vers la page d'accueil pour les routes inconnues */}
      </Routes>
      <Footer />
      <Scroll />
    </BrowserRouter>
  );
}

export default App;
