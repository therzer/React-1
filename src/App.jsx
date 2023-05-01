import './App.css';
import FondoTop from './components/Index/FondoTop';
import Servicios from './components/Index/Servicios';
import Menu from './components/Menu/Menu';
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import Resultados from './components/Index/Resultados';
import Footer from './components/Footer/Footer';


function App() {

  const descripcionTop ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate natus reprehenderit, pariatur animi laboriosam reiciendis excepturi.";

  return (
    <div className="App">
        <Menu/> 
        <FondoTop img={image1} titulo="Titulo Top" descripcion={descripcionTop} redes={true}/>
        <Servicios/>
        <FondoTop img={image2} titulo="About us" descripcion={descripcionTop} redes={false} about={true}/>
        <Resultados/>
        <Footer/>
    </div>
  );
}

export default App;
