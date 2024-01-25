import Home from "./components/Home";
import MainAbout from "./components/NavPages/MainAbout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainService from "./components/NavPages/MainService";
import MainMenu from "./components/NavPages/MainMenu";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
      <Route path="/about">
        <MainAbout />
      </Route>
      <Route path="/service" >
        <MainService />
      </Route>
      <Route path="/menu" >
        <MainMenu />
      </Route>
    </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
