import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import ExploreMenu from './screens/ExploreMenu';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import Favourite from './screens/Favourite';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exploremenu" element={<ExploreMenu />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Favourite.js" element={<Favourite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
