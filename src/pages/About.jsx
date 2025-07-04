import "../styles/About.css";
import fond from "../assets/fond.jpg"; // Remplace par une image plus adaptée si disponible

function About() {
  return (
    <div className="about-page">
      {/* Bannière d'accueil de la page About */}
      <div className="about-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            À PROPOS DE NOUS
          </small>
          <h1 className="display-4 fw-bold mt-2">QUI SOMMES-NOUS ?</h1>
          <p className="mt-3 text-box">
            Bienvenue sur notre boutique mouride, spécialisée dans la vente
            d’articles religieux : Baye La, Xassidas, chapelets, tableaux,
            livres islamiques et plus encore. Notre mission est de promouvoir
            les valeurs spirituelles à travers des objets authentiques et
            utiles.
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

      {/* Section de présentation de l'entreprise */}
      <div className="container my-5">
        <div className="row align-items-center text-white">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Notre Histoire</h2>
            <p>
              Fondée en 2023 par des disciples engagés, notre boutique est née
              de la volonté de rendre accessibles les objets spirituels qui
              accompagnent la pratique du mouridisme. Depuis nos débuts, nous
              mettons un point d'honneur à proposer des produits de qualité,
              respectueux de nos traditions.
            </p>
            <p>
              Inspirés par la sagesse et l'héritage du Cheikh Ahmadou Bamba,
              nous cherchons à offrir à notre communauté des articles qui
              nourrissent la foi et soutiennent le cheminement spirituel de
              chacun. Chaque objet est soigneusement sélectionné, témoignant
              d'un savoir-faire artisanal et d'une authenticité qui font la
              richesse de notre boutique.
            </p>
            <p>
              Au fil des années, nous avons tissé des liens solides avec des
              artisans locaux et des fournisseurs dignes de confiance, afin de
              garantir que chaque produit reflète à la fois la beauté et la
              profondeur de la culture mouride. Notre engagement dépasse la
              simple vente : il s'agit d'un véritable service rendu à la
              communauté.
            </p>
            <p>
              Nous croyons fermement que ces objets spirituels ne sont pas
              seulement des produits, mais des porteurs de valeurs et de
              mémoire. C’est pourquoi nous veillons à ce que chaque client
              trouve ici bien plus qu’un article, mais un compagnon de route
              pour sa foi et sa dévotion.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={fond}
              alt="Notre histoire - Boutique Mouride"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
