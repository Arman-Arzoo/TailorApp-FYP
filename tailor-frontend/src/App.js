import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./components/Home/HomeScreen";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { UDashboard } from "./components/UserDashboard/UDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Switch>
          <main className="main">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/udashboard" component={UDashboard}></Route>
          </main>
        </Switch>
        <Footer name="Arman ALi" />
      </div>
    </BrowserRouter>
  );
}

export default App;
