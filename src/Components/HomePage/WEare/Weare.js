import './Weare.css';
import logo1 from '../../../assets/Client-First - IMAGES/Logo1.svg' 
import logo2 from '../../../assets/Client-First - IMAGES/Logo 2.svg' 
import logo3 from '../../../assets/Client-First - IMAGES/Logo 3.svg' 
import logo4 from '../../../assets/Client-First - IMAGES/Logo 4.svg' 
import logo5 from '../../../assets/Client-First - IMAGES/Logo 5.svg' 

function Weare(){
    return(
        <>
    <div className = "weare">
       <div className = "hed"> <h3>We are</h3></div>
       <div className = "boximgs">
       <img src={logo1} alt="Image 1" className="box-image" />
       <img src={logo2} alt="Image 1" className="box-image" />
       <img src={logo3} alt="Image 1" className="box-image" />
       <img src={logo4} alt="Image 1" className="box-image" />
       <img src={logo5} alt="Image 1" className="box-image" />
      
       </div>

    </div>
    
    </>
    )
}
export default Weare;