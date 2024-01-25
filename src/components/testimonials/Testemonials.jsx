import "./testimonials.css"
import useFetch from '../Hooks/useFetch';
import SubHeading from '../SubHeading';
import { useState } from 'react';

const Testemonials = () => {
    const {data} = useFetch('http://localhost:3001/testimonials')
    // this array object is also a pain in the ass so i need to create a seperate file for it
    const testimonialInfo = data
    let [current, setCurrent] = useState(0)

    const navigateTo = (index) => {
        setCurrent(index)
        console.log(index)
    }
    return ( 
        <section className="testemonials">
            <div className="container">
                <SubHeading title="TESTIMONIAL" subTitle="Our Clients Say" />
                <div className="testemonial-container flex">
                       { [...testimonialInfo, ...testimonialInfo.slice(0, 3)].map((testimonial, index) => (
                          <div className={current === index ? 'client active' : 'client'} key={index} style={{ transform: `translate(-${current * 100}%)`}}>
                            <div className='flex'>
                                <img src={testimonial.imgUrl} alt={`client ${index + 1}`} />
                                <div>
                                    <h4>{testimonial.clientName}</h4>
                                    <i>{testimonial.profession}</i>
                                </div>
                            </div>
                            <p>{testimonial.info}</p>
                          </div>  
                        ))
                       }
                </div>
                <div className="nav-dots flex">
                        {
                            testimonialInfo.map((_, index) => (
                                <div className={current === index ? "dot active" : "dot" } key={index}
                                onClick={() => {
                                    navigateTo(index)
                                }}
                                style={{cursor: "pointer"}}></div>
                            ))
                        }
                    </div>
            </div>
        </section>
     );
}
 
export default Testemonials;