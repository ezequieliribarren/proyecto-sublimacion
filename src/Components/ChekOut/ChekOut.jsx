import React from 'react'
import { Link } from 'react-router-dom'

const ChekOut = ({orderId}) => {

  let fecha = new Date();

  return (
    <div className="container">
    <div className= "contMensaje">
  <h2>Gracias por su compra</h2>
  <h3>Orden de compra: {orderId}</h3>
  <h3>Fecha: {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()} {fecha.getHours()}:{fecha.getMinutes()}</h3>
  <h3>Estado: Aprobado </h3>
</div>
<div className="contMarca">
  <h2>SUBLITORRE</h2>
  <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1677109707/logoSubliTorre_xb1hqe.png" alt="" />
  <Link className="link" to="/">VOLVER A LA PANTALLA PRINCIPAL</Link>
</div>
</div>
  )
}

export default ChekOut