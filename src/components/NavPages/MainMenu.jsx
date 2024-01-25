import Menu from "../menu/Menu";
import MainPagesShowcase from "./MainPagesShowcase";

const MainMenu = () => {
    return ( 
        <>
            <section className="main-service">
                <div className="overlay"></div>
                <div className="main-showcase">
                    
                <MainPagesShowcase home='Home' other='Menu' title='Menu' />
            </div>
            </section> 
            <Menu />
        </>
     );
}
 
export default MainMenu;