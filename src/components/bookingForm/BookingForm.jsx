import "./bookings.css";
import { Check } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        person: ''
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
            const response = await axios.post('/database/userData.json', formData);
            console.log('Data successfully sent:', response.data);

            // Reset form data after successful submission
            setFormData({
                name: '',
                email: '',
                date: '',
                time: '',
                person: ''
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <section className="booking">
            <div className="container bg-overlay">
                <div className="overlay"></div>
                <div className="overlay-top"></div>

                {/* the content here */}
                <div className="booking-content flex">
                    <div className="reservation">
                        <h1>30% Off</h1>
                        <h1>For Online Reservation</h1>
                        <p>
                            Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                        </p>

                        <ul className="list">
                            <li className="list-item flex"><i style={{ fontSize: '2rem', color: '#DA9F5B', paddingRight: '5px' }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                            <li className="list-item flex"><i style={{ fontSize: '2rem', color: '#DA9F5B', paddingRight: '5px' }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                            <li className="list-item flex"><i style={{ fontSize: '2rem', color: '#DA9F5B', paddingRight: '5px' }}><Check /></i> Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>

                    <div className="the-booking-form form-group flex">
                        <h1>Book Your Table</h1>
                        <form className="my-Form" onSubmit={handleSubmit}>
                            <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
                            <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                            <input type="date" name="date" value={formData.date} placeholder="Date" onChange={handleChange} />
                            <input type="time" name="time" placeholder="time" value={formData.time} onChange={handleChange} />
                            <select name="person" value={formData.person} onChange={handleChange}>
                                <option value="" disabled>Person</option>
                                <option value="1">Person 1</option>
                                <option value="2">Person 2</option>
                                <option value="3">Person 3</option>
                                <option value="4">Person 4</option>
                            </select>
                            <input type="submit" value="Book Now" className="btn" />
                        </form>
                    </div>
                </div>
                <div className="overlay-bottom"></div>
            </div>
        </section>
    );
}

export default BookingForm;
