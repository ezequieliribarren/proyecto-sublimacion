import React from 'react'
import x from "./Cart.module.css"
const Cart = () => {
  return (
    <div className={x.cart} >
      <h1>Carrito</h1>
    <img  src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678216497/shopping-carts-with-shopping-bag-png_tzwfrf.webp" alt="" width={300} />
    </div>
    
  )
}

export default Cart