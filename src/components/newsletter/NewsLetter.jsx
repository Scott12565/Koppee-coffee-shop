import "./newsletter.css"
import { useState } from "react";
const NewsLetter = () => {

    const [formData, setFormData] = useState({
        email: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
            
        });
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch('http://localhost:80/subscribers', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: formData.email  
                })
            });
    
            if (!res.ok) {
                throw Error('Could not fetch data from the database');
            }
    
            const data = await res.json();
            console.log('Success in sending data', data);
    
            setFormData({
                email: ''
            });

        }
    return ( 
        <section className="newsletter bg-overlay py-5 flex">

            {/* add some state management */}
            <div className="overlay"></div>
            <div className="overlay-top"></div>
            <div className="container">
                <div className="newsletter-content">
                    
                    <h1 className="discount">50% OFF</h1>
                    <h1>Sunday Special Offer</h1>
                    <h4>Only for Sunday from 1st Jan to 30th Jan 2045</h4>

                    <div className="form-group">
                        <form className="myForm" onSubmit={handleSubmit}>
                            <input type="email" name="email" value={formData.email} className="form-control" placeholder="Your Email" onChange={handleChange} />
                            <button type="submit" className="btn-submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="overlay-bottom"></div>
        </section>
     );
}
 
export default NewsLetter;