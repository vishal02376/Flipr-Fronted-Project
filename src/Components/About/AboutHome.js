
import Aboutfive from '../AllAboutpage/Aboutfive/Aboutfive'
import Aboutfour from '../AllAboutpage/AboutFourth/Aboutfour'
import Aboutone from '../AllAboutpage/Aboutone/Aboutone'
import Aboutthird from '../AllAboutpage/Aboutthird/Aboutthird'
import Abouttwo from '../AllAboutpage/Abouttwo/Abouttwo'
import Listof from '../HomePage/Listof/Listof'
// import About from '../Home/About us/About'
import Nave from '../HomePage/Nave/Nave'
import Join from '../Home/Join/Join'
import Footer from '../HomePage/Footer/Footer'
function AboutHome(){
    return(
        <>
        <Nave/>
       <Aboutone/>
       <Abouttwo/>
       {/* <About/> */}
       <Aboutthird/>
       <Aboutfour/>
       <Aboutfive/>
       <Listof/>
       <Join/>
       <Footer/>
        </>
    )
}
export default AboutHome