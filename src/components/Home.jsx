import AboutUs from "./about/About";
import BookingForm from "./bookingForm/BookingForm";
import Menu from "./menu/Menu";
import NewsLetter from "./newsletter/NewsLetter";
import Services from "./services/Services";
import Showcase from "./showcase/Showcase";
import Testemonials from "./testimonials/Testemonials";

const Home = () => {
    return ( 
        <>
        <Showcase />
        <AboutUs />
        <Services />
        <NewsLetter />
        <Menu />
        <BookingForm />
        <Testemonials />
        </>
     );
}
 
export default Home;