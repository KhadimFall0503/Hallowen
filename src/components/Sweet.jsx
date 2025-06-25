import Image from "../assets/product.jpg";
import "../styles/Sweet.css";

function Sweet() {
  return (
    <div className="container sweet text-white pt-5">
      <hr />
      <h1 className="pt-5 text-center fw-bold">L'univers sucré d'Halloween</h1>

      <div className="row g-4 align-items-center justify-content-between pt-5 mb-5">
        <div className="col-md-6">
          <h3 className="fs-2">
            Une pincée de magie pour chaque aventure de chasse aux bonbons.
          </h3>
          <p className="pt-3">
            Des classiques aux créations les plus effrayantes, les bonbons
            d’Halloween nous rappellent que la véritable essence de cette fête
            réside dans le plaisir de savourer de douces surprises en famille ou
            entre amis.
          </p>
          <button className="btn btn-lg btn-warning text-white" type="button">
            Acheter maintenant
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img src={Image} alt="Bonbons d'Halloween" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Sweet;
