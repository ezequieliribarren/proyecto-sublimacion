import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout"
import ChekOut from "../ChekOut/ChekOut";
const Cart = () => { 
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Volver`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se vacio el carrito", "", "success");
      }
    });
  };

  if(orderId){
    return (
    <ChekOut orderId = {orderId}/>
    )
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <h2>${item.price}.-</h2>
                    <h2>Unidades: {item.quantity}</h2>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Elimiar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1677111771/sublitorre_nq0ewq.png" alt="" />
            
            <h2>TOTAL DE LA COMPRA ${getTotalPrice()}</h2>
            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={()=>setShowForm(true)}>Finalizar compra</Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

          </div>
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
      )}
    </div>
  );
};

export default Cart;
