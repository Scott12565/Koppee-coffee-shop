// import Footer from "../footer/Footer";
import Services from "../services/Services";
import MainPagesShowcase from "./MainPagesShowcase";


const MainService = () => {
    return (
        
        <>
            <section className="main-service">
                <div className="main-showcase">
                    <div className="overlay"></div>
                    <MainPagesShowcase home='Home' other='Service' title='services' />
            </div>
            </section> 
            <Services/>
        </>
        
        
     );
}
 
export default MainService;