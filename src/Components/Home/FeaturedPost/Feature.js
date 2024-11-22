import './Feature.css'
import building from '../../../assets/Client-First - IMAGES/building.svg';


function Feature(){
    return(
        <>
        <div className='Feature'>
          <div className='Left'>
            <div className='Headings'><h2>Featured Post</h2></div>
            <div className='lefts'>
            <div className='imges'>
            <img src = {building} alt="description" />
            <p>July 2024</p>
            </div>
            <div className='para'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <button className="read-more-btn">
      Read more <i className="fa fa-arrow-right"></i>
    </button>
            </div>

          </div>
         <div className='Rights'>  
            <h2>All Post</h2>
            <div className='Right'>
            <div className='AllPost'>
                <p className='bul'>By <span className='aug'>August</span> 2024</p> 
                <p  className='buls'>Figma is a powerful, cloud-based design tool that allows teams to collaborate in real-time on UI/UX design projects. 
                    It offers vector editing, prototyping, and design systems to streamline the design process.</p>
            </div>
            <div className='AllPost'>
                <p className='bul'>By <span className='aug'>August</span> 2024</p>
                <p  className='buls'>Figma is a powerful, cloud-based design tool that allows teams to collaborate in real-time on UI/UX design projects. 
                    It offers vector editing, prototyping, and design systems to streamline the design process.</p>
            </div>

            <div className='AllPost'>
                <p className='bul'>By <span className='aug'>August</span> 2024</p>
                <p  className='buls'>Figma is a powerful, cloud-based design tool that allows teams to collaborate in real-time on UI/UX design projects. 
                    It offers vector editing, prototyping, and design systems to streamline the design process.</p>
            </div>

            <div className='AllPost'>
                <p className='bul'>By <span className='aug'>August</span> 2024</p>
                <p  className='buls'>Figma is a powerful, cloud-based design tool that allows teams to collaborate in real-time on UI/UX design projects. 
                    It offers vector editing, prototyping, and design systems to streamline the design process.</p>
            </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Feature;