import React from 'react'
import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { Shop } from '../../Context/ShopContext';
import "./style.css"

const CartWidget = () => {
  const {cart} = useContext(Shop)
  return (
      <div>
          <GrCart size="32" className="ml-5"/>
          {cart.length && <span className='cart__qty'>({cart.length})</span>}
      </div> 
  )
}

export default CartWidget