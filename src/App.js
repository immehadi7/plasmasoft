import { BrowserRouter , Switch, Route} from "react-router-dom";
import AboutUs from "./AllComponent/Pages/AboutUs/AboutUs";
import Footer from "./AllComponent/Pages/Footer/Footer";
import Header from "./AllComponent/Pages/Header/Header";
import Home from "./AllComponent/Pages/Home/Home";
import NotFound from "./AllComponent/Pages/NotFound/NotFound";
import SeeAvailableDoc from "./AllComponent/Pages/SeeAvailableDoc/SeeAvailableDoc";
import Services from "./AllComponent/Pages/Services/Services";
/* import Login from "./AllComponent/Pages/Login/Login"; */
import SignUp from "./AllComponent/Pages/SignUp/SignUp";
import AuthProvider from "./AllComponent/Context/AuthProvider";
import PrivateRoute from "./AllComponent/PrivateRoute/PrivateRoute";
import ContactUS from "./AllComponent/Pages/ContactUs/ContactUS";
import CovidPatient from "./AllComponent/Pages/CovidPatient/CovidPatient";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Switch>
                  <Route exact path="/">
                  <Home></Home>
                  </Route>
                 {/*  <Route path="/services">
                  <Services></Services>
                  </Route> */}
                  <PrivateRoute path="/seeavaialabledoc">
                  <SeeAvailableDoc></SeeAvailableDoc>
                  </PrivateRoute>
                  <Route path="/aboutus">
                  <AboutUs></AboutUs>
                  </Route>
                 {/*  <Route path="/login">
                  <Login></Login>
                  </Route> */}
                  <Route path="/signup">
                  <SignUp></SignUp>
                  </Route>
                  <Route path="/contactus">
                  <ContactUS></ContactUS>
                  </Route>
                  <Route path="/covidpatient">
                  <CovidPatient></CovidPatient>
                  </Route>


                  {/* not found part added in the last */}
                  <Route path="*">
                  <NotFound></NotFound>
                  </Route>
                 

          </Switch>
          <Footer></Footer>
      </BrowserRouter>

      </AuthProvider>
     
    </div>
  );
}

export default App;
