import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import HomeBannerImage from "../../assets/homeBackground.png"


function Home() {
    const bannerTitle = "Chez vous, partout et ailleurs"
    return (
        <div className="homePage">
            <Banner
                img = {HomeBannerImage}
                alt= "mer et monatgnes"
                title = {bannerTitle} 
            />
            <Cards  />
        </div>
  )
}

export default Home;
