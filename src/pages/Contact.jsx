import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Bannière d'accueil de la page Contact */}
      <div className="contact-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            NOUS CONTACTER
          </small>
          <h1 className="display-4 fw-bold mt-2">À VOTRE ÉCOUTE</h1>
          <p className="mt-3 text-box">
            Une question sur nos produits religieux ? Besoin d’un conseil ou
            d’un article personnalisé ? N'hésitez pas à nous écrire. Nous
            répondons rapidement pour vous accompagner dans votre cheminement
            spirituel.
          </p>
          <a
            href="/"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Retour à l'accueil"
          >
            RETOUR À L'ACCUEIL
          </a>
        </section>
      </div>

      {/* Section Contact avec formulaire + carte */}
      <div className="container my-5">
        <div className="row align-items-stretch">
          {/* Formulaire */}
          <div className="col-md-6 mb-4">
            <h2 className="text-white fw-bold mb-4">Formulaire de Contact</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="exemple@domaine.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Votre message ou demande spécifique"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning fw-bold text-white"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Carte (map) */}
          <div className="col-md-6">
            <h2 className="text-white fw-bold mb-4">Où Nous Trouver</h2>
            <div className="map-responsive shadow rounded">
              <iframe
                title="Carte de localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7732.441527243992!2d-17.4497485!3d14.7166771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b24f51b7ad%3A0x60ab3391b9f0d2a!2sTouba%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1620200000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
