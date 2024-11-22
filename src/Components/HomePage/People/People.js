import './People.css';
import jana from '../../../assets/Client-First - IMAGES/jana.svg';  

function People() {
  return (
    <div className="people-container">
      <div className="text-container">
        <p className="testimonial-title">Testimonial</p>
        <p className="testimonial-subtitle">What people say <br />about our blog</p>
        <p className="testimonial-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus esse praesentium porro aperiam omnis deleniti quae assumenda, repudiandae aut recusandae nesciunt dicta, sit commodi illum.
        </p>
      </div>

      <div className="divider"></div>

      <div className="testimonial-text">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas facere
           harum dolor vel distinctio nemo, explicabo animi vitae a eveniet, dolorum, adipisci in quo delectus
            at doloremque tempore repudiandae ratione.
        </b>

        <div className="author-info">
          <img src={jana} alt="Author" />
          <div>
            <p>Janathan Vailem</p>
            <p className="author-location">NEW YORK, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
