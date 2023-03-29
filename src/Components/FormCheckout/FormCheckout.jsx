import React, { useState } from "react";
import x from "./FormCheckout.module.css"
import { addDoc, collection, updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart, setFecha, setEstado } ) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    email2: "",
    phone: "",
    fecha: Date(),
    estado: "Aprobado"
  });


  const handleSubmit = (e) => {
       e.preventDefault(); 
    if (userData.email !== userData.email2) {
 Swal.fire({
        title: "Los e-mails no coinciden",
      })
      return;
    }

    if (userData.phone.length !== 10 ) {
     
Swal.fire({
          title: "El numero de telefono debe tener 10 digitos (incluyendo el 11) Ej: 1144556677",
        })
      return;
    }
    
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));
    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product
    });
  };

  return (
    <div className={x.contForm}>
    <h2 className={x.title}>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className={x.form}>
        <h3>Datos personales</h3>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })} required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })} required
        /> 
        
        <input
          type="text"
          placeholder="Confirma el e-mail"
          value={userData.email2}
          onChange={(e) => setUserData({ ...userData, email2: e.target.value })} required
        />
                <input
          type="number"
          placeholder="Telefono de contacto"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })} required
        />
        


        <Button  variant = "outlined" className={x.button} type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
