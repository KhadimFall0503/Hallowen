// ProductList.jsx
import React from "react";

function ProductList({ products = [], onSelectProduct }) {
  if (!products.length) {
    return (
      <p className="text-white text-center py-4">Aucun produit disponible.</p>
    );
  }

  return (
    <div className="candies-grid">
      {products.map((product) => (
        <div
          key={`${product.type}-${product.id}`}
          className="candy-card shadow-lg"
          role="group"
          aria-label={`Produit ${product.name}`}
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
