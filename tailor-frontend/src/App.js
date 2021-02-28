import "./App.css";
import { BrowserRouter, Route, } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./components/Home/HomeScreen";
import { SignUp } from "./components/SignUp/SignUp";
import {TailorSignUp} from "./components/SignUp/TailorSignUp"
// import { TailorSignUp  } from "./components/SignUp/TailorSignUp ";
import { SignIn } from "./components/SignIn/SignIn";
import {TailorSignIn} from "./components/SignIn/TailorSignIn"
// import { TailorSignIn } from "./components/SignIn/TailorSignIn";
import { UDashboard } from "./components/UserDashboard/UDashboard";
import {  GlobalProvider} from "./context/GlobalContexts";


function App() {



  return (
    <BrowserRouter>
    <GlobalProvider>
     
      <div className="grid-container">
        <Header />
        
          <main className="main">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/tailors/signup" component={TailorSignUp}></Route>
            <Route path="/tailors/signin" component={TailorSignIn}></Route>
            <Route path="/udashboard" component={UDashboard}></Route>
          </main>
        
        <Footer name="Arman ALi" />
      </div>
    
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
