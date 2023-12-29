import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse";
import AboutBannerImage from "../../assets/aboutBackround.png"
import {PageTitle} from "../../utils/PageTilte";

function About() {
    PageTitle("Kasa | À Propos")
    return (
        <div className="aboutPage">
            <Banner
                img = {AboutBannerImage}
                alt= "montagnes enneigées"
            />
            <div className="aboutPage__content">
                <Collapse title="Fiabilité" content={
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
                
                }/>

                <Collapse title="Respect" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                
                }/>
                 <Collapse title="Service" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                
                }/>

                <Collapse title="Securité" content={
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note ausii bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.nous organisons egalement des ateliers sur la sécurité domestique pour nos hôtes</p>
                
                }/>
            </div>
        </div>
  )
}

export default About;
