import "../styles/Shop.css";
import CandiesList from "../components/CandiesList";
import Declaration from "../components/Declaration";

function Shop() {
  return (
    <div className="shop-page ">
      {/* Bannière d'accueil de la page Shop */}
      <div className="shop-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            COLLECTION 2025
          </small>
          <h1 className="display-4 fw-bold mt-2">TOUS NOS PRODUITS</h1>
          <p className="mt-3 text-box">
            Découvrez toutes nos décorations, bonbons et accessoires pour un
            Halloween magique et terrifiant. Faites votre choix parmi une
            sélection unique !
          </p>
          <a
            href="/"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Retour à l'accueil"
          >
            RETOUR ACCUEIL
          </a>
        </section>
      </div>
      {/* produits candies */}
      <div className="container">
        <CandiesList />
        <Declaration />
      </div>
    </div>
  );
}

export default Shop;
