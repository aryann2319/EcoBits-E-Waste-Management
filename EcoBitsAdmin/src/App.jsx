import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from './Components/NavbarAdmin'
import AllProducts from "./pages/AllProducts"
import AddProducts from "./pages/AddProduct"
import Collaborations from "./Pages/CollaborationsAdmin"
import PickupAdmin from "./pages/PickupAdmin"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/allproducts' element={<AllProducts/>} />
          <Route path='/collaborations-admin' element={<Collaborations/>} />
          <Route path='/addproducts' element={<AddProducts/>} />
          <Route path='/' element={<PickupAdmin/>} />
        </Routes>
    </div>
  )
}

export default App
