import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import '../styles/Product.css'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Product = () => {
  const {allproductdata} = useContext(ShopContext)
  const {productID} = useParams()
  const product = allproductdata?.find((e) => e.id === productID || e.id === Number(productID));
  const {addToCart} = useContext(ShopContext);
  return (
    <div>
      <div className="product-cart-icon">
          <Link to="/Cart" class="cart-icon">
            🛒 <span>Cart </span>
          </Link>
        </div>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img class="productdisplay-main-img" src={product.image} alt=''/>
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">Rs. {product.old_price}</div>
            <div className="productdisplay-right-prices-new">Rs. {product.new_price}</div>
          </div>
          <div className="productdisplay-right-category"><b>Category:  </b>{product.category}</div>
          <div className="productdisplay-right-description">{product.description}</div>
          <button onClick={()=>{addToCart(product.id); toast.success("Product added to cart!");}}>ADD TO CART</button>
        </div>
      </div>
      <div className="store-description">
        Our products are crafted entirely from upcycled e-waste, giving new life to discarded computer components, wires, plastics, and metals. Each item is a unique blend of functionality and purpose, turning what was once electronic scrap into stunning everyday use products and decor pieces.<br/><br/>
        By reimagining e-waste, we don’t just reduce landfill, we create meaningful, one-of-a-kind piece that spark conversation and support a circular economy. Whether it's a home accessory or a lifestyle essential, every product tells a story of transformation, sustainability, and innovation.
        </div>
        <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}

export default Product
