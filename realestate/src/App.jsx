
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import 'flowbite/dist/flowbite.min.css';
import Service from './components/Service';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
import MyFooter from './components/Footer';


function App() {
  

  return (
    <>
  
   <Navbar/>
  <Home/>
  <Service/>  
  <About/>
  <Products/>
  <Blog/>
  <Newsletter/>
  <MyFooter/>
    </>
  )
}

export default App
