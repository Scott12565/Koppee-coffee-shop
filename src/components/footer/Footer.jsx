import "./footer.css"
import { Envelope, Facebook, GeoAltFill, Instagram, Linkedin, Telephone, Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return ( 
        <footer className="main-footer">
            <div className="overlay"></div>
            <div className="overlay-top"></div>
            <div className="container grid grid-4">
                <div className="contact-us">
                    <h4>GET IN TOUCH</h4>
                    <div>
                        <p><i><GeoAltFill /></i>123 Street, New York, USA</p>
                        <p><i><Telephone /></i>+012 345 67890</p>
                        <p><i><Envelope /></i>info@example.com</p>
                    </div>
                </div>

                <div className="follow-us">
                    <h4>FOLLOW US</h4>
                    <div>
                        <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <div className="social flex">
                        <a href="#twitter"> <i><Twitter /></i></a>
                        <a href="#facebook"> <i><Facebook /></i></a>
                        <a href="#linkedin"> <i><Linkedin/></i></a>
                        <a href="#insta"> <i><Instagram /></i></a>
                        </div>
                    </div>
                </div>

                <div className="open-hours">
                    <h4>OPEN HOURS</h4>
                    <div>
                    <p style={{marginBottom: "8px"}}>MONDAY - FRIDAY</p>
                    <span style={{
                        display: "block",
                        marginBottom: '1.5rem'}}>8.00 AM - 8.00 PM</span>                
                    <p style={{marginBottom: "8px"}}>SATURDAY - SUNDAY</p>
                    <span>2.00 PM - 8.00 PM</span> 
                    </div>
                                   
                </div>
                <div className="news-letter">
                    <h4>NEWSLETTER</h4>
                    <div>
                        <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <form className="myForm">
                            <input type="email" name="email" className="form-control" placeholder="Your Email"/>
                            <button type="submit" className="btn-submit">Sign Up</button>
                        </form>
                    </div>
                </div>
 
            </div>

            <div style={{
                height: "1px",
                width: '100%',
                marginTop: "70px",
                backgroundColor: "#fff",
                position: 'relative'
            }}/>
        </footer>
     );
}
 
export default Footer;