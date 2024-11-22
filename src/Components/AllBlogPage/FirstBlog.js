import './blog.css';

import white from '../../assets/Client-First - IMAGES/white.svg'

function FirstBlog() {
    return (
        <>
        <div className='mainblog'>
            <div className='Blog'>
                <div className='B-Left'>
                    <p>Featured Post</p>
                    <h1 className = "fff">Step-by-step guides to choosing great font pairs</h1>
                    <p>By <span className = "spt">Jon Doe</span> | may 23 2022</p>
                    <p className = 'pfff'>orem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                         <br/>  <br/>
                    <button>Read more</button>
                </div>
                <div className='B-Right'>
                    <img src={white} alt="Description" />
                </div>
            </div>
            </div>
        </>
    );
}

export default FirstBlog;
