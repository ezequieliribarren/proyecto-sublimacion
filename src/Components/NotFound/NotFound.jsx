import React from 'react'
import x from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={x.notFound}>
        <h2>ERROR 404</h2>
        <h3>LA PAGINA NO FUE ENCONTRADA</h3>
        <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1680101632/notFound_ubpqns.jpg" alt="" />
    </div>
  )
}

export default NotFound