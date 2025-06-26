import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Bannière d'accueil de la page Contact */}
      <div className="contact-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            CONTACTEZ-NOUS
          </small>
          <h1 className="display-4 fw-bold mt-2">NOUS SOMMES À VOTRE ÉCOUTE</h1>
          <p className="mt-3 text-box">
            Vous avez des questions, des suggestions ou besoin d'aide ?
            N'hésitez pas à nous contacter. Nous sommes là pour vous aider à
            préparer le Halloween parfait.
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
                  placeholder="Votre nom"
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
                  placeholder="Votre email"
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
                  placeholder="Votre message"
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
            <h2 className="text-white fw-bold mb-4">Notre Localisation</h2>
            <div className="map-responsive shadow rounded">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019516460584!2d-122.41941558468144!3d37.77492977975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c76e0e2d3%3A0x0!2sHalloween%20Shop!5e0!3m2!1sfr!2sfr!4v1615332526239!5m2!1sfr!2sfr"
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
