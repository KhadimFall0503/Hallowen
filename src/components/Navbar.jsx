import { NavLink } from "react-router-dom";
import { ShoppingCart, Ghost } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const cartCount = 3;

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          end
        >
          <Ghost size={32} color="#ffc107" />
          HALLOWEEN SHOP
        </NavLink>

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
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                SHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item position-relative ms-3">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
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
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
