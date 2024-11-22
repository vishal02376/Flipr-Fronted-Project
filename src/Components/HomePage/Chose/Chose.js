import './Chose.css';
import iconone from '../../../assets/Client-First - icons/ons.svg';
import iconones from '../../../assets/Client-First - icons/start.svg';
import bus from '../../../assets/Client-First - icons/icon.svg';
import trad from '../../../assets/Client-First - icons/trad.svg';

function Chose() {
    return (
        <div className="container">
            <h2>Chose A Catagory</h2>
            <div className="box-container">
                <div className="box">
                    <img src={iconone} alt="Business Icon" />
                    <h3>Business</h3>
                    <p>This is a business-related box with some description.</p>
                </div>
                <div className="box">
                    <img src={iconones} alt="Start Icon" />
                    <h3>Startup</h3>
                    <p>This is a Startup-related box with some description.</p>
                </div>
                <div className="box">
                    <img src={bus} alt="Bus Icon" />
                    <h3>Economy</h3>
                    <p>This is a Economy-related box with some description.</p>
                </div>
                <div className="box">
                    <img src={trad} alt="Trad Icon" />
                    <h3>Technology</h3>
                    <p>This is a Technology-related box with some description.</p>
                </div>
            </div>
        </div>
    );
}

export default Chose;
