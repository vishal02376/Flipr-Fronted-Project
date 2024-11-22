import './Four.css';
import ground from '../../../assets/Client-First - IMAGES/ground.svg';

function Aboutfour() {
    return (
        <>
            <div className="Ts-para">
                <div className="Ts-left">
                    <b>Our team of creatives</b>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                    <br />
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="Ts-right">
                    <img src={ground} alt="Ground illustration" />
                </div>
            </div>
        </>
    );
}

export default Aboutfour;
