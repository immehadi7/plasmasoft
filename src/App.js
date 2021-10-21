import { BrowserRouter , Switch, Route} from "react-router-dom";
import AboutUs from "./AllComponent/Pages/AboutUs/AboutUs";
import Footer from "./AllComponent/Pages/Footer/Footer";
import Header from "./AllComponent/Pages/Header/Header";
import Home from "./AllComponent/Pages/Home/Home";
import NotFound from "./AllComponent/Pages/NotFound/NotFound";
import SeeAvailableDoc from "./AllComponent/Pages/SeeAvailableDoc/SeeAvailableDoc";
import Services from "./AllComponent/Pages/Services/Services";
import Login from "./AllComponent/Pages/Login/Login";
import SignUp from "./AllComponent/Pages/SignUp/SignUp";

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
                  <Route path="/login">
                  <Login></Login>
                  </Route>
                  <Route path="/signup">
                  <SignUp></SignUp>
                  </Route>
                  <Route path="*">
                  <NotFound></NotFound>
                  </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
