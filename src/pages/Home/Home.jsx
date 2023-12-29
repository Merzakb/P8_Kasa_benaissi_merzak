// Importation des composants 
import Banner from "../../components/Banner/Banner"
import Cards from "../../components/Cards/Cards"
// Importation de l'image d'arrière-plan de la bannière 
import HomeBannerImage from "../../assets/homeBackground.png"
// Importation de la fonction PageTitle 
import { PageTitle } from "../../utils/PageTilte"

// Définition du composant Home
function Home() {
    // Définition du titre de la bannière
    const bannerTitle = "Chez vous, partout et ailleurs"

    // Appel de la fonction PageTitle pour définir le titre de la page
    PageTitle("Kasa | Location entre particuliers")

    // Rendu du composant Home
    return (
        <div className="homePage">
            {/* Utilisation du composant Banner avec des propriétés spécifiques */}
            <Banner
                img={HomeBannerImage}
                alt="mer et montagnes"
                title={bannerTitle}
            />
            {/* Utilisation du composant Cards pour afficher les cartes de chambres */}
            <Cards />
        </div>
    )
}

export default Home
