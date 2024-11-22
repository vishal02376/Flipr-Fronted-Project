import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css';
import logo from '../../../assets/Client-First - IMAGES/Logo.svg';

function Nave() {
  const [isOpen, setIsOpen] = useState(false); // Toggle for dropdown

  return (
    <>
      <div className="Nave">
        <div className="Left">
          <div className="Logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="Right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>Contact us</li>
            <div className="sub">
              <li>Subscribe</li>
            </div>
          </ul>
        </div>

        <div className="Dot" onClick={() => setIsOpen(!isOpen)}>
          <b>{isOpen ? "✕" : "☰"}</b>
        </div>
      </div>

      <div className={isOpen ? "Reponsive" : "Active"}>
        <div className="Box1">
          <div className="Top">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>Contact us</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nave;
