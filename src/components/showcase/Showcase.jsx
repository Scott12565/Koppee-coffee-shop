import "./showcase.css"

import ShowcaseContent from "./ShowcaseContent";
const Showcase = () => {

    return ( 
        <section className="showcase">
            <div className="overlay"></div>
            <div className="container">
                <ShowcaseContent />
            </div>
            <div className="overlay-bottom"></div>
        </section>
     );
}
 
export default Showcase;