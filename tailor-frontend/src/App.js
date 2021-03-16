import "./App.css";
import { BrowserRouter, Route, } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./components/Home/HomeScreen";
import { SignUp } from "./components/SignUp/SignUp";
import {AdminSignUp} from "./components/SignUp/AdminSignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { TailorSignIn} from "./components/SignIn/TailorSignIn"
import {AdminSignIn} from "./components/SignIn/AdminSignIn";
import { UDashboard } from "./components/UserDashboard/UDashboard";
import { TDashboard}  from "./components/TailorDashboard/TDashboard";
import { ADashboard}  from "./components/AdminDashboard/ADashbaord";
import {GlobalProvider} from "./context/GlobalContexts";


function App() {



  return (
    <BrowserRouter>
    <GlobalProvider>
     
      <div className="grid-container">
        <Header />
        
          <main className="main">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/users/signup" component={SignUp}></Route>
            <Route path="/users/signin" component={SignIn}></Route>
            <Route path="/tailors/signin" component={TailorSignIn}></Route>
            <Route path="/admin/signup" component={AdminSignUp}></Route>
            <Route path="/admin/signin" component={AdminSignIn}></Route>
            <Route path="/users/udashboard" component={UDashboard}></Route>
            <Route path="/tailors/tdashboard" component={TDashboard}></Route>
            <Route path="/admin/adashboard" component={ADashboard}></Route>
          </main>
        
        <Footer name="Arman ALi" />
      </div>
    
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
