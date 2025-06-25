import "../styles/Ceramic.css";

function Ceramic() {
  return (
    <div className="ceramic-page pt-5">
      {/* Section d'accueil / bannière */}
      <div
        className="ceramic text-white d-flex align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            NEW COLLECTION
          </small>
          <h1 className="display-4 fw-bold mt-2">HALLOWEEN DECORATIONS</h1>
          <p className="mt-3 text-box">
            Que vous préfériez le charme de la décoration d’Halloween classique
            ou le frisson des designs modernes et innovants, ces décorations
            vous invitent à célébrer tout ce qui est étrange, énigmatique et
            envoûtant.
          </p>
          <a
            href="/"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Shop Halloween Decorations"
          >
            SHOP NOW
          </a>
        </section>
      </div>
    </div>
  );
}

export default Ceramic;
