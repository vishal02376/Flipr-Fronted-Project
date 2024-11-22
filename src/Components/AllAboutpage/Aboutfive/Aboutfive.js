import './Five.css';
import threep from '../../../assets/Client-First - IMAGES/threep.svg';

function Aboutfive() {
    return (
        <>
            <div className="Ts-para">
                
                    <div className="Ts-right">
                    <img src={threep} alt="Ground illustration" />
                </div>
                <div className="Ts-left">
                    <h3>Why We started this Blog</h3>
                    <b>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</b> 
                    <br /> <br/>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
               
            </div>
        </>
    );
}

export default Aboutfive;
