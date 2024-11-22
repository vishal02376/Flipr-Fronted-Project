import React from 'react';
import './Lisof.css';
import first from '../../../assets/Client-First - IMAGES/firsts.svg';
import sec from '../../../assets/Client-First - IMAGES/sec.svg';
import third from '../../../assets/Client-First - IMAGES/thirds.svg';
import last from '../../../assets/Client-First - IMAGES/last.svg';
import x from '../../../assets/Client-First - icons/x.svg';
import insta from '../../../assets/Client-First - icons/insta.svg';
import linkd from '../../../assets/Client-First - icons/linkd.svg';
import fb from '../../../assets/Client-First - icons/fb.svg';


function Listof() {
  return (
    <>   
     <h2 className='cen'>List of Authors</h2>
    <div className="containerss">
       
      {/* Box 1 */}
      <div className="boxx">
        <img src={first} alt="Image 1" className="box-image" />
        <h3 className="box-name">Floyd Miles</h3>
        <p className="box-paragraph">This is a sample paragraph describing John Doe's profile.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkd} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Box 2 */}
      <div className="boxx">
        <img src={sec} alt="Image 2" className="box-image" />
        <h3 className="box-name">Dianne Russell</h3>
        <p className="box-paragraph">This is a sample paragraph describing Jane Smith's profile.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkd} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Box 3 */}
      <div className="boxx">
        <img src={third} alt="Image 3" className="box-image" />
        <h3 className="box-name">Jenny Wilsom</h3>
        <p className="box-paragraph">This is a sample paragraph describing Samuel Lee's profile.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkd} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Box 4 */}
      <div className="boxx">
          
        <img src={last} alt="Image 4" className="box-image" />
        <h3 className="box-name">Lestli Alexander</h3>
        <p className="box-paragraph">This is a sample paragraph describing Alice Cooper's profile.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkd} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Listof;
