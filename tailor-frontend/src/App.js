import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer'
import {ImageSliders} from './components/Home/ImageSliders';
import {HowItWork} from './components/Home/HowItWork';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container" >
     
      <Header/>
      <main className="main">
        <ImageSliders/>
        <HowItWork/>
      
      </main>
      <Footer name="Arman ALi"/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
