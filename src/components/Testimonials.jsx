import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Amélie R.",
    text: "J’ai commandé des décorations et des bonbons, tout était parfait et bien emballé. Mes enfants ont adoré !",
    img: "/images/amelie.jpg",
    bgClass: "bg-warning",
  },
  {
    id: 2,
    name: "Kévin M.",
    text: "Livraison rapide, produits originaux, ambiance Halloween garantie !",
    img: "/images/kevin.jpg",
    bgClass: "", // pas de bg-warning ici
  },
  {
    id: 3,
    name: "Sophie T.",
    text: "Super boutique Halloween, je recommande ! Interface agréable et service client réactif.",
    img: "/images/sophie.jpg",
    bgClass: "bg-warning",
  },
];

function Testimonials() {
  return (
    <section className="testimonials py-5 bg-dark text-white">
      <div className="container">
        <h1 className="text-center mb-5 section-title text-white fs-1 fw-bold">
          Témoignages Clients
        </h1>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className={`testimonial-card p-4 rounded shadow text-center ${testimonial.bgClass}`}
                >
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="testimonial-avatar mb-3"
                  />
                  <p className="testimonial-text text-dark">{`“${testimonial.text}”`}</p>
                  <h5 className="mt-3 fw-bold text-dark">
                    — {testimonial.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles gauche / droite */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
