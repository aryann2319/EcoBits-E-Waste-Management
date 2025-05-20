import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = (allproductdata) => {
  let cart = {};
  // Initialize the cart based on the fetched products' IDs
  for (let index = 0; index < allproductdata.length; index++) {
    const id = allproductdata[index].id;
    cart[id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {

  const [allproductdata, setAllProductData] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch("http://localhost:4000/addtocart", {
        method: 'post',
        headers: {
          Accept: 'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body: JSON.stringify({"itemId":itemId}),
      }).then((response)=>response.json()).then((data)=>console.log(data))
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch("http://localhost:4000/removefromcart", {
        method: 'post',
        headers: {
          Accept: 'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body: JSON.stringify({"itemId":itemId}),
      }).then((response)=>response.json()).then((data)=>console.log(data))
    }
  };

  // Fetch the product data from the database
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAllProductData(data);
        setCartItems(getDefaultCart(data));
  
        if (localStorage.getItem('auth-token')) {
          fetch("http://localhost:4000/getcart", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'auth-token': localStorage.getItem('auth-token'),
              'Content-Type': 'application/json',
            },
            body: null,
          })
          .then((response) => response.json())
          .then((data) => setCartItems(data));
        }
      });
  }, []);
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allproductdata.find((product) => product.id === item);
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    allproductdata,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
