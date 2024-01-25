import AboutUs from "../about/About";
import MainPagesShowcase from "./MainPagesShowcase";

const MainAbout = () => {
    return ( 
        <>
            <section className="main-service">
                <div className="overlay"></div>
                <div className="main-showcase">
                    <MainPagesShowcase home='Home' other='About' title='About Us' />
                </div>
            </section> 
            <AboutUs />
            </>
     );
}
 
export default MainAbout;