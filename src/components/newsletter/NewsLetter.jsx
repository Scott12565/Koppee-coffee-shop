import "./newsletter.css";
import { useState } from "react";
import axios from "axios";

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Fetch existing subscribers data
            const response = await axios.get('/database/newsletter.json');
            const existingSubscribers = response.data.subscribers;
    
            // Add new subscriber
            const newSubscriber = {
                id: existingSubscribers.length + 1, // Increment ID
                email: formData.email
            };
    
            // Update the array of subscribers with the new subscriber
            const updatedSubscribers = [...existingSubscribers, newSubscriber];
    
            // Send updated subscribers data back to the server
            await axios.put('/database/newsletter.json', { subscribers: updatedSubscribers });
    
            console.log('Success in adding subscriber');
    
            // Reset form data
            setFormData({
                email: ''
            });
        } catch (error) {
            console.error('Error in adding subscriber', error);
        }
    }
    

    return (
        <section className="newsletter bg-overlay py-5 flex">
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
