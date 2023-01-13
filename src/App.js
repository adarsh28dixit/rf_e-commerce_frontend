import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import Journey from './screens/Journey';
import Team from './screens/Team';
import Store from './screens/Store';
import Contact from './screens/Contact';
import SingleProductScreen from './screens/SingleProduct';
import { ContextProvider } from './context/ContextProvider';

import CartScreen from './screens/Cart';

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/team' element={<Team />} />
        <Route path='/store' element={<Store/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-details/:id' element={<SingleProductScreen />} />
        <Route path='/cart' element={<CartScreen />} />
      </Routes>

    </div>
    </ContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
