import { Link } from "react-router-dom";

const MainPagesShowcase = ({ home, other, title }) => {
    return ( 
        <>
            <div className="about-title" style={{
                textAlign: 'center'
            }} >
            <h1>{title}</h1>
                <div className="container">
                    <Link to="/" className="link-style">{home}</Link>
                    <span style={{fontSize: '.97rem'}}>/</span>
                    <Link to="/service" className="link-style" >{other}</Link>
                </div>
            </div>
            <div className="overlay-bottom"></div>
        </>
     );
}
 
export default MainPagesShowcase;