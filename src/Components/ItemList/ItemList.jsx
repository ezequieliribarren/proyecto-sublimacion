import React from 'react'
import Item from '../Item/Item'
import x from "./ItemList.module.css"


const ItemList = ( {items} ) => {
  return (
    <div className={x.contItemList}>

      <div className={x.titleItemList}>
          <h2>Nuestros productos</h2>
      </div>
      <div className={x.cards}>
        
        {
            items.map( (element)=>{
                return <Item key={element.id} element={element} />
            } )
        }

    </div>
    </div>
    
  )
}

export default ItemList