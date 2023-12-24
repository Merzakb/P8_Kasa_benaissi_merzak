import Banner from "../../components/Banner/Banner"
import Collaps from "../../components/Collaps/Collaps";
import AboutBannerImage from "../../assets/aboutBackround.png"

function About() {
    return (
        <div className="aboutPage">
            <Banner
                img = {AboutBannerImage}
                alt= "montagnes enneigées"
            />
            <div className="aboutPage__content">
                <Collaps title="Fiabilité" content={
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
                
                }/>

                <Collaps title="Respect" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                
                }/>
                 <Collaps title="Service" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                
                }/>

                <Collaps title="Securité" content={
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note ausii bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.nous organisons egalement des ateliers sur la sécurité domestique pour nos hôtes</p>
                
                }/>
            </div>
        </div>
  )
}

export default About;
