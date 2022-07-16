import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'
import "./style.css"

const Cart = () => {

  const { removeItem, removeAll } = useContext(Shop)
  const { cart } = useContext(Shop)

  const itemTotal = (price, qty) => {
    return qty * price;
  }

  const totalCost = () => {
    let sum = 0
    console.log(cart)
    cart.forEach(element => {
      console.log(sum += (element.price * element.quantity))
    });

    return sum
  }

  return (
    <table className='mx-auto mt-5 bg-dark'>
      {cart.length ?
        <>
          {cart.map(product => {
            return <>
              <tr key={product.id}>
                <td className='td__img px-3'><img className='img-fluid img' src={product.image} alt={product.title}></img></td>
                <td className='px-3'>{product.title}</td>
                <td className='px-3'>Cant: {product.quantity}</td>
                <td className='px-3'>US$ {itemTotal(product.price, product.quantity)} </td>
                <td className='px-3'> <button className='mx-3 btn btn-primary justify-item-center mx-auto' onClick={() => { removeItem(product.id) }}>Quitar Producto</button></td>
              </tr>
            </>
          })
          }
          <tr>
            <td className='td__img'></td>
            <td></td>
            <td className='text-center font-weight-bold'>TOTAL</td>
            <td className='text-center font-weight-bold'>US$ {totalCost()}</td>
          </tr>
          {/* <button className='mt-5 btn btn-primary justify-item-center mx-auto' onClick={() => { removeAll() }}>Eliminar Todos</button> */}
        </>
        :
        null
      }
    </table>
  )
}

export default Cart