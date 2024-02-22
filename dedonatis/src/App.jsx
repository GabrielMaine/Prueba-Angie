import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from "./components/Checkout";


function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
