import "../styles/Ceramic.css";

function Ceramic() {
  return (
    <div className="ceramic-page pt-5">
      {/* Section d'accueil / bannière */}
      <div
        className="ceramic text-white d-flex align-items-center"
        style={{ minHeight: "80vh", backgroundColor: "#121212" }}
      >
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            NOUVELLE COLLECTION
          </small>
          <h1
            className="display-4 fw-bold mt-2"
            style={{ fontFamily: "'Aladin', cursive" }}
          >
            Décorations Mourides Authentiques
          </h1>
          <p
            className="mt-3 text-box"
            style={{ maxWidth: "700px", lineHeight: 1.6, fontSize: "1.1rem" }}
          >
            Que vous cherchiez à embellir votre espace avec la sérénité du
            Mouridisme ou à offrir un cadre empreint de spiritualité, nos
            décorations vous accompagnent dans votre cheminement et rendent
            hommage à notre riche héritage.
          </p>
          <a
            href="/shop"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Voir les décorations mourides"
            style={{
              background: "linear-gradient(45deg, #ff9800, #ffc107)",
              border: "none",
            }}
          >
            DÉCOUVRIR LES DÉCORATIONS
          </a>
        </section>
      </div>
    </div>
  );
}

export default Ceramic;
