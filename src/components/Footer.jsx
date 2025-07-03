import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Ghost } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <hr />
        <div className="footer-grid">
          {/* Logo / Nom */}
          <div className="footer-section">
            <h2 className="footer-logo d-flex align-items-center text-white fw-bold">
              <Ghost size={28} color="#ffc107" style={{ marginRight: "8px" }} />
              MOURIDE-SHOP
            </h2>
            <p className="footer-text">
              Objets religieux et culturels pour nourrir votre foi et votre
              tradition.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="footer-section">
            <h4 className="footer-title">Suivez-nous</h4>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer-bottom text-center mt-4">
          <small>
            &copy; {new Date().getFullYear()} Mouride-Shop. Tous droits
            réservés. Créé par Khadim Fall.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
