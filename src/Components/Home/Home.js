import Chose from "../HomePage/Chose/Chose";
import Footer from "../HomePage/Footer/Footer";
import Listof from "../HomePage/Listof/Listof";
import Nave from "../HomePage/Nave/Nave";
import Overlap from "../HomePage/Overlap/Overlap";
import People from "../HomePage/People/People";
import ReadMore from "../HomePage/Readmore/Readmore";
import Weare from "../HomePage/WEare/Weare";
import About from "./About us/About";
import Feature from "./FeaturedPost/Feature";
import Join from "./Join/Join";

function Home(){
    return(

        <>
        
        <Nave/>
        <ReadMore/>
        <Feature/>
        <About/>
        <Chose/>
        <Overlap/>
        <Listof/>
        <Weare/>
        <People/>
        <Join/>
        <Footer/>
  
        </>
    )
}

export default Home;