import './navbar.css';
import { useState } from "react";
import { CupHotFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    };
    return ( 
        <header>
            <div className="header">
                <div id="brand">KOPPEE</div>
                <i className="menu" onClick={handleActive}><CupHotFill /></i>
                <nav className={`navbar navbar-expand ${active ? 'active': ''}`}>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about">About</Link>
                    <Link className='nav-link' to="/service">Service</Link>
                    <Link className='nav-link' to="/menu">Menu</Link>
                    <Link className='nav-link' to="#">Contact</Link>
                </nav>
            </div>
        
        </header>
        
            
     );
};
 
export default Navbar;