
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbarhome from './Components/Navbarhome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Topimage from './Components/Topimage';
import Mapcomp from './Components/Mapcomp';
import FlipImage from './Components/FlipImage';
import Blogs from './Components/Blogs';
import Events from './Components/Events';
import Portfolio from './Components/Portfolio';

function App() {
  return (

   
<BrowserRouter>
<Navbarhome/>
 {/* <Navtwo/> */}
{/* <Gallery/> */}

{/* <Mapcomp/> */}
    {/* <Homepage/> */}
   {/* <About/> */}
   {/* <Contact/> */}

{/* <Topimage/> */}

   {/* <Aboutus/> */}
  
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      {/* <Route path='/flip' element={<FlipImage/>}/> */}
    </Routes>

     <Footer/>
    </BrowserRouter>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
  );
}

export default App;
