import Banner from "../../components/Banner/Banner"
import AboutBannerImage from "../../assets/aboutBackround.png"

function About() {
    return (
        <div className="aboutPage">
            <Banner
                img = {AboutBannerImage}
                alt= "montagnes enneigées"
            />
        </div>
  )
}

export default About;
