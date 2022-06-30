import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <div className='d-flex flex-row justify-content-around flex-wrap'>
       {products.map(producto => {
           return <Item product={producto} key={producto.id}/>
       })} 
    </div>
  )
}

export default ItemList