import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductList({ products = [], onSelectProduct }) {
  useEffect(() => {
    AOS.init({
      duration: 700, // vitesse plus douce
      easing: "ease-in-out", // courbe fluide
      once: true,
      offset: 100,
    });
  }, []);

  if (!products.length) {
    return (
      <p className="text-white text-center py-4">Aucun produit disponible.</p>
    );
  }

  return (
    <div className="candies-grid">
      {products.map((product, index) => (
        <div
          key={`${product.type}-${product.id}`}
          className="candy-card shadow-lg"
          role="group"
          aria-label={`Produit ${product.name}`}
          data-aos="fade-up"
          data-aos-delay={index * 100} // effet en cascade
        >
          <div
            className="image-container"
            style={{ cursor: "pointer" }}
            tabIndex={0}
            role="button"
            onClick={() => onSelectProduct(product)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelectProduct(product);
              }
            }}
          >
            <img
              src={product.image}
              alt={`Image de ${product.name}`}
              className="candy-image"
              loading="lazy"
            />
          </div>
          <div className="candy-info">
            <h3 className="candy-name fw-bold fs-4 text-warning">
              {product.name}
            </h3>
            <p className="description">{product.description}</p>
            <p className="price fw-semibold">{product.price} FCFA</p>
            <button
              type="button"
              className="btn-cart"
              onClick={() => onSelectProduct(product)}
              aria-label={`Ajouter ${product.name} au panier`}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
