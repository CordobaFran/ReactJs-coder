import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'

const Cart = () => {

  const { removeItem, removeAll } = useContext(Shop)

  const { cart } = useContext(Shop)

  return (
    <ul>
      {cart.length ?
        <>
          {cart.map(product => {
            return <li key={product.id}>{product.title} - Cantidad: {product.quantity}<button className='mx-3' onClick={() => { removeItem(product.id) }}>Quitar Producto</button></li>
          })
          }
          <button className='mt-5' onClick={() => { removeAll() }}>Eliminar Todos</button>
        </>
        :
        null
      }
    </ul>
  )
}

export default Cart