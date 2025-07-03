import Image from "../assets/product.jpg";
import "../styles/Sweet.css";

function Sweet() {
  return (
    <div className="container sweet text-dark pt-5">
      <hr />
      <h1 className="pt-5 text-center fw-bold text-warning">
        L'Univers Mouride
      </h1>

      <div className="row g-4 align-items-center justify-content-between pt-5 mb-5">
        <div className="col-md-6">
          <h3 className="fs-2 fw-semibold text-white">
            La spiritualité au cœur de chaque objet.
          </h3>
          <p className="pt-3">
            Chaque article de notre collection rend hommage à l’héritage du
            mouridisme : des chapelets faits main aux Xassidas soigneusement
            imprimés, en passant par les encens et les sandales traditionnelles.
          </p>
          <button
            className="btn btn-lg btn-warning text-white fw-bold"
            type="button"
          >
            Découvrir la collection
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={Image}
            alt="Objets de foi mouride"
            className="image rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Sweet;
