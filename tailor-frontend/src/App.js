import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer'
import {HomeScreen} from './components/Home/HomeScreen';
import { SignUp } from './components/SignUp/SignUp';
import {SignIn} from './components/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container" >
     
      <Header/>
      <main className="main">
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/signup"  component={SignUp}></Route>
        <Route path='/signin' component={SignIn}></Route>
        
        
      
      </main>
      <Footer name="Arman ALi"/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
