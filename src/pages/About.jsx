import "../styles/About.css";
import hallowen from "../assets/hallowen.avif"; // Remplace par une image plus adaptée si disponible

function About() {
  return (
    <div className="about-page">
      {/* Bannière d'accueil de la page About */}
      <div className="about-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            À PROPOS DE NOUS
          </small>
          <h1 className="display-4 fw-bold mt-2">QUI SOMMES-NOUS ?</h1>
          <p className="mt-3 text-box">
            Bienvenue sur notre boutique mouride, spécialisée dans la vente
            d’articles religieux : Baye La, Xassidas, chapelets, tableaux,
            livres islamiques et plus encore. Notre mission est de promouvoir
            les valeurs spirituelles à travers des objets authentiques et
            utiles.
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

      {/* Section de présentation de l'entreprise */}
      <div className="container my-5">
        <div className="row align-items-center text-white">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Notre Histoire</h2>
            <p>
              Fondée en 2023 par des disciples engagés, notre boutique est née
              de la volonté de rendre accessibles les objets spirituels qui
              accompagnent la pratique du mouridisme. Depuis nos débuts, nous
              mettons un point d'honneur à proposer des produits de qualité,
              respectueux de nos traditions.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={hallowen}
              alt="Notre histoire - Boutique Mouride"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
