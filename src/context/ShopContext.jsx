// import React, { createContext, useEffect } from "react"
// //import all_product from "../components/assets/all_product.js";
// import { useState } from "react";

// export const ShopContext=createContext(null);
// const getDefaultCart=()=>{
//     let cart={};
//     for (let index = 0; index < 300+1; index++) {
//         cart[index]=0;
        
//     }
//     return cart;
// }
// const ShopContextProvider=(props)=>{
//     const [all_product,setAll_product]=useState([]);
//     const[cartItems,setCartItems]=useState(getDefaultCart());
   
//    useEffect(()=>{
//     fetch('http://localhost:4000/allproducts')
//     .then((response)=>response.json())
//     .then((data)=>setAll_product(data))

//     if(localStorage.getItem('auth-token')){
//         fetch('http://localhost:4000/getcart',{
//             method:'POST',
//             headers:{
//                 Accept:'application/form-data',
//                 'auth-token':`${localStorage.getItem('auth-token')}`,
//                 'Content-Type':'application/json',
//             },
//             body:"",
//         }).then((response)=>response.json())
//         .then((data)=>setCartItems(data));
//     }
//    },[])

//     const addToCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/addtocart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/form-data',
//                     'auth-token':`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify({"itemId":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
//         }
//     }

//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/removefromcart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/form-data',
//                     'auth-token':`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify({"itemId":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
//         }
//     }
    
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item));
//                 totalAmount += itemInfo.new_price * cartItems[item];
//             }
//         }
//         return totalAmount; 
//     };
    
//     const getTotalCartItems=()=>{
//         let totalItem=0;
//         for(const item in cartItems ){
//             if(cartItems[item]>0){
//                 totalItem +=cartItems[item];
//             }
//         }
//         return totalItem;
//     }

//     const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;


import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAllProduct(data))
      .catch((error) => console.error("Error fetching products:", error));

    // Fetch cart items if user is authenticated
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error("Error fetching cart:", error));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error adding to cart:", error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error removing from cart:", error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find((product) => product.id === Number(item));
        if (product) {
          totalAmount += product.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
