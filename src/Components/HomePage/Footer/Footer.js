import './Footer.css';
import logo from '../../../assets/Log.svg';
import x from '../../../assets/Client-First - icons/x.svg';
import insta from '../../../assets/Client-First - icons/insta.svg';
import linkd from '../../../assets/Client-First - icons/linkd.svg';
import fb from '../../../assets/Client-First - icons/fb.svg';

function Footer() {
    return (
        <>
            <div className="MainFooter">
                <div className="Footer">
                    <div className="Left">
                        <div className="Logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>

                    <div className="Right">
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div className="Subs">
                    <div className="LeftSubs">
                        <h3>Subscribe to our newsletter to get <br /> the latest updates and news</h3>
                    </div>
                    <div className="RightSubs">
                        <input placeholder="Enter Email idh" aria-label="Newsletter subscription" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='Social'>
                    <div className='cleft'>
                        <p>Subscribe to our newsletter to get</p>
                    </div>
                    <div className='cright'>
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

export default Footer;
