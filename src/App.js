
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div className='flex flex-col w-screen h-screen relative'>
      <Navbar/>
      <Home/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App;
