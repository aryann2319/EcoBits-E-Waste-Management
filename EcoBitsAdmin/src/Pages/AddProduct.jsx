import React, { useState } from 'react'
import '../styles/AddProducts.css'

const AddProducts = () => {

  const[image, setImage] = useState(false);
  const[productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"",
    new_price:"",
    old_price:"",
    id:"",
    description:"",
  })

  const imageHandler =(e)=>{
    setImage(e.target.files[0]);
  }

  const changeHandler =(e)=>{
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image)
    await fetch('http://localhost:4000/upload', {
      method:'post',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product)
      await fetch('http://localhost:4000/addproduct', {
        method:'post',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("failed")
      })
    }
  }
 
  return (
    <div className='add-product'>
      <h1>ADD NEW PRODUCT</h1>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Id</p>
        <input value={productDetails.id} onChange={changeHandler} type="text" name='id' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler}type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <input value={productDetails.category} onChange={changeHandler}type="text" name='category' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <input value={productDetails.description} onChange={changeHandler}type="text" name='description' placeholder='Type here' />
      </div>
      <div className="addproduct-uploadfield">
      <p>Upload Image</p>
      <input onChange={imageHandler} type="file" name='image' id='file-input'/>
      </div>
      <button onClick={()=>{Add_Product()}} className="addproduct-btn">Add Product</button>
    </div>
  )
}

export default AddProducts
