import './service.css'
import SubHeading from "../SubHeading";
import service1 from './services images/service-1.jpg'
import service2 from './services images/service-2.jpg'
import service3 from './services images/service-3.jpg'
import service4 from './services images/service-4.jpg'
import { Truck, CupHot, Award, Table } from "react-bootstrap-icons";

const Services = () => {
    return ( 
        <section className="services">
            <div className="container">
                <SubHeading title='OUR SERVICES' subTitle='Fresh & Organic Beans' />
                
                <div className="service-content grid grid-2 ">
                    <div className="delivery flex">
                        <img src={service1} alt="service1" />
                        <div>
                            <div className="flex">
                               <i className='rounded'><Truck size={24}/></i> 
                               <h4>Fastest Door Delivery</h4>
                            </div>
                            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>

                    <div className="beans flex">
                        <img src={service2} alt="service1" />
                        <div>
                            <div className="flex">
                                <i className='rounded'><i><CupHot size={24}/></i> </i> 
                                <h4>Fresh Coffee Beans</h4>
                            </div>
                            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>

                    <div className="coffee flex">
                        <img src={service3} alt="service1" />
                        <div>
                            <div className="flex">
                                <i className="rounded"><Award size={24}/></i> 
                                <h4>Best Quality Coffee</h4>
                            </div>
                            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>

                    <div className="bookings flex">
                        <img src={service4} alt="service1" />
                        <div>
                            <div className="flex">
                                <i className="rounded"><Table size={24}/></i>
                                <h4>Online Teble Booking</h4>
                            </div>
                            <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Services;