import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container" >
     
      <Header/>
      <main className="main">
      
      </main>
      <Footer name="Arman ALi"/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
