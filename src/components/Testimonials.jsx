import "../styles/Testimonials.css";
import bamba from "../assets/bamba.jpg"; // Image de Serigne Touba

const testimonialsData = [
  {
    id: 1,
    name: "Ahmadou B.",
    text: "Les objets achetés ont renforcé ma foi et apporté une paix profonde. Boutique sérieuse et respectueuse de la tradition.",
    img: bamba,
    bgClass: "bg-mouride",
  },
  {
    id: 2,
    name: "Serigne M.",
    text: "Livraison rapide, qualité des produits irréprochable. Un vrai lien avec notre héritage spirituel.",
    img: "/images/serigne.jpg",
    bgClass: "",
  },
  {
    id: 3,
    name: "Fatou S.",
    text: "Un service chaleureux, des articles authentiques. Une vraie lumière dans mon cheminement spirituel.",
    img: "/images/fatou.jpg",
    bgClass: "bg-mouride",
  },
];

function Testimonials() {
  return (
    <section className="testimonials py-5 bg-dark text-light">
      <div className="container">
        <h1 className="text-center mb-5 section-title text-warning fs-1 fw-bold">
          Témoignages de Nos Clients
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
                    className="testimonial-avatar mb-3 rounded-circle border border-warning"
                  />
                  <p className="testimonial-text fst-italic text-dark">{`“${testimonial.text}”`}</p>
                  <h5 className="mt-3 fw-bold text-dark">
                    — {testimonial.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              style={{ filter: "invert(1)" }}
              aria-hidden="true"
            />
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              style={{ filter: "invert(1)" }}
              aria-hidden="true"
            />
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
