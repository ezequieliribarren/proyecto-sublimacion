import { useState } from "react"


const Formulario = () => {
    const [name,setName] = useState ("")
  return (
    <div>
        <form action="">
            <input type="text" placeholder="Ingrese su nombre" onChange={(event)=> console.log(event)} name="name"/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario