import React from 'react'
import "./Product.scss"
import { useState } from 'react';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg,setSelectedImg] = useState(0)
  const[quantity, setQuantity] = useState(1)
  const images = [
    
      "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1561136599-18186efeeb47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    
  ];
  return (
    <div className='product'>
      <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick = {e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick = {e=>setSelectedImg(1)}/>
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
      </div>
      <div className="right">
      <h1>Title</h1>
      <span className='price'>187</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat placeat magnam veritatis non! Commodi esse, aperiam cupiditate vero, ad impedit nihil possimus doloribus reprehenderit, hic beatae consequatur explicabo at laboriosam!
      </p>
      <div className="quantity">
        <button onClick={()=>setQuantity(prev=>prev=== 1 ? 1 : prev -1 )}>
            -
        </button>
        {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>
            +
        </button>
      </div>

      <button className="add">
        
        <AddShoppingCartIcon/> Add to cart</button>
        <div className="links">
        <div className="item">
          <FavoriteBorderIcon/> ADD TO WISH LIST
        </div>
        
        <div className="item">
          <BalanceIcon/> ADD TO COMPARE
        </div>
        </div>

          <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>

      </div>
    </div>
  )
}

export default Product