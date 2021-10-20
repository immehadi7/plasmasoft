import { BrowserRouter , Switch, Route} from "react-router-dom";
import AboutUs from "./AllComponent/Pages/AboutUs/AboutUs";
import Header from "./AllComponent/Pages/Header/Header";
import Home from "./AllComponent/Pages/Home/Home";
import NotFound from "./AllComponent/Pages/NotFound/NotFound";
import SeeAvailableDoc from "./AllComponent/Pages/SeeAvailableDoc/SeeAvailableDoc";
import Services from "./AllComponent/Pages/Services/Services";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
          <Switch>
                  <Route exact path="/">
                  <Home></Home>
                  </Route>
                  <Route path="/services">
                  <Services></Services>
                  </Route>
                  <Route path="/seeavaialabledoc">
                  <SeeAvailableDoc></SeeAvailableDoc>
                  </Route>
                  <Route path="/aboutus">
                  <AboutUs></AboutUs>
                  </Route>
                  <Route path="*">
                  <NotFound></NotFound>
                  </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
