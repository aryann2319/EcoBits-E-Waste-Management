import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Store from "./pages/Store"
import Pickup from "./pages/Pickup"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() { 
  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/pickup' element={<Pickup/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product/' element={<Product/>} >
            <Route path=':productID' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  )
}

export default App
