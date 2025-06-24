import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
// Assurez-vous d'avoir ce fichier CSS pour les styles personnalisés

function Navbar() {
  // Exemple : nombre d'articles dans le panier (à remplacer par un état réel)
  const cartCount = 3; // Remplacez ceci par votre logique pour obtenir le nombre d'articles dans le panier

  return (
    <nav className="navbar navbar-expand-lg  p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          HALLOWEEN SHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item position-relative ms-3">
              <Link to="/cart" className="nav-link">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "white",
                      color: "orange",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      transform: "translate(50%, -50%)",
                      pointerEvents: "none",
                      lineHeight: 1,
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
