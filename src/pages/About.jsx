import "../styles/About.css";
import hallowen from "../assets/hallowen.avif";
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
            Bienvenue sur Halloween Shop, votre destination privilégiée pour
            toutes les décorations et friandises effrayantes. Notre passion est
            de rendre votre Halloween inoubliable grâce à une sélection unique
            de produits.
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
              Fondée en 2023, Halloween Shop est née de l'amour pour la fête
              d'Halloween et le désir de partager cette passion avec le monde.
              Notre équipe dévouée travaille toute l'année pour vous offrir les
              meilleures décorations et friandises.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={hallowen}
              alt="Notre histoire Halloween Shop"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
