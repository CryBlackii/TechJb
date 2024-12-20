import './App.css';

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
