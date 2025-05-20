import React, {useState, useEffect} from 'react'
import Item from './Item'
import "../styles/MyProducts.css"

const ComputerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allproducts') 
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div class="my-products">
        <div class="myItems">
            {products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default ComputerProducts
