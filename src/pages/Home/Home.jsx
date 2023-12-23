import Banner from "../../components/Banner/Banner";
import HomeBannerImage from "../../assets/homeBackground.png"


function Home() {
    const title = "Chez vous, partout et ailleurs"
    return (
        <div >
            <Banner
                img = {HomeBannerImage}
                title = {title} 
            />
        </div>
  )
}

export default Home;
