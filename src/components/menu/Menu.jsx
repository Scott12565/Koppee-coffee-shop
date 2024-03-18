import './menu.css'
import SubHeading from "../SubHeading";
import useFetch from "../Hooks/useFetch";

const Menu = () => {
    const { data, isLoading, isError } = useFetch('../database/db.json', 'menu');
    const hotCoffee = data ? data.slice(0, 3) : [];
    const coldCoffee = data ? data.slice(3) : [];

    return (
        <section className="shop-menu">
            <div className="container">
                <SubHeading title='Menu & Pricing' subTitle='Competitive Pricing' />
                {isLoading && <p>Loading Data</p>}
                {isError && <p>{isError}</p>}
                <div className="main-menu grid">
                    {hotCoffee.length > 0 && (
                        <div className="hot-coffee">
                            <h1 className="hot">Hot Coffee</h1>
                            {hotCoffee.map((Item, index) => (
                                <div className="menu-item flex" key={index}>
                                    <div className="price">
                                        <img src={Item.imgUrl} alt={`menu ${index + 1}`} />
                                        <h3>{Item.price}</h3>
                                    </div>
                                    <div className="black-coffee">
                                        <h2>{Item.title}</h2>
                                        <p>{Item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="cold-coffee">
                        <h1 className="cold">Cold Coffee</h1>
                        {coldCoffee.map((Item, index) => (
                            <div className="menu-item flex" key={index}>
                                <div className="price">
                                    <img src={Item.imgUrl} alt={`menu ${index + 1}`} />
                                    <h3>{Item.price}</h3>
                                </div>
                                <div className="black-coffee">
                                    <h2>{Item.title}</h2>
                                    <p>{Item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
