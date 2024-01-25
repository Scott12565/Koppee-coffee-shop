import './about.css'
import { Check } from "react-bootstrap-icons";
import SubHeading from "../SubHeading";
import about from '../services/services images/about.png';

const AboutUs = () => {
    return ( 
        <section className="about-us">
            <div className="container">
                <SubHeading title='About Us' subTitle="Serving Since 1950" />

                <div className="about-content flex">
                    <div className="our-story">
                        <h2>Our Story</h2>
                        <p className="subheading">
                        Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea
                        </p>
                        <p>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                        </p>
                        <button type="button" className="btn btn-dark">Learn More</button>
                    </div>

                    <img src={about} alt="About" />

                    <div className="our-vision">
                        <h2>Our Vision</h2>
                        <p className="subheading">
                            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                        </p>
                        <ul className="list">
                            <li className="list-item flex"><i style={{
                                fontSize: '1.65rem',
                            }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                            <li className="list-item flex"><i style={{
                                fontSize: '1.65rem'
                            }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                            <li className="list-item flex"><i style={{
                                fontSize: '1.65rem'
                            }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <button type="button" className="btn btn-warning">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
     );
};
 
export default AboutUs;