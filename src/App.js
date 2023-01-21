import Home from "./coponents/Home/Home";
import About from "./coponents/About/About"
import Quality from "./coponents/Quality/Quality";
import Gallery from "./coponents/Gallery/Gallery";
import Enjoy from "./coponents/Enjoy/Enjoy";
import Menu from "./coponents/Menu/Menu";
import EnjoyButtom from "./coponents/EnjoyButtom/EnjoyButtom";
import Footer from './coponents/Footer/Footer.js'
import Contact from './coponents/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Quality/>
    <Gallery/>
    <Enjoy/>
    <Menu/>
    <Contact/>
    <EnjoyButtom/>
    <Footer/>

    </div>
  );
}

export default App;
