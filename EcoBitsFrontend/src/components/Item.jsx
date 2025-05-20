import React from 'react'
import "../styles/Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <div class="item">
      <img src={props.image}/>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">Rs. {props.new_price}</div>
        <div className="item-price-old">Rs. {props.old_price}</div>
      </div>
      <Link to={`/product/${props.id}`} class="item-view-btn"  onClick={() => window.scrollTo({top: 0, behavior:'instant'})}>View</Link>
    </div>
  )
}

export default Item
//onClick={() => window.scrollTo({top: 0, behavior:'instant'})}