import Allpost from '../AllBlogPage/Allpost/Allpost'
import FirstBlog from '../AllBlogPage/FirstBlog'
import Nave from "../HomePage/Nave/Nave"
import Chose from '../HomePage/Chose/Chose'
import Join from '../Home/Join/Join'
import Footer from '../HomePage/Footer/Footer'

function Blog(){
    return(
        <>
        <Nave/>
      <FirstBlog/>
      <Allpost/>
      <Chose/>
      <Join/>
      <Footer/>
     
        </>
    )
}
export default Blog