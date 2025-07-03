// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // ou utilise un autre icône de ton choix
import "../styles/Scroll.css";

function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
}

export default Scroll;
