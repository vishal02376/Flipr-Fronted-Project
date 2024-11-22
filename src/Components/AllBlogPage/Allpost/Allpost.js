import './Post.css';
import { data } from '../../AllAboutpage/Data/Data';

function Allpost() {
    return (
        <div className="Parent">
            <h4>All Post</h4>
            {data.map((item) => (
                <div className="Alldata" key={item.id}>
                    <div className="D-img">
                        <img src={item.img} alt={`${item.Name}`} />
                    </div>
                    <div className="C-ontent">
                        <b>{item.Name}</b>
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                    </div>
                </div>
            ))}
            <p className='pagination'>
    <span class="prev"> &lt; Prev</span>
    <span class="next">Next &gt;&gt;</span>
</p>

        </div>
    );
}

export default Allpost;
