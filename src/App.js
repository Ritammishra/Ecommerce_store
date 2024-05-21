
import './App.css';
import { BrowserRouter, Routes,Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import store from './store/store';
import Electronics from './Components/Electronics';
function App() {
  return (
   <div className='App'>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
   </div>
  );
}

export default App;
