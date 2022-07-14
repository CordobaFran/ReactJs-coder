import React from 'react'
import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../Context/ShopContext';
import "./style.css"

const CartWidget = () => {
  const navigate = useNavigate();

  const {cart} = useContext(Shop)

  const toCart = () =>{
    navigate("/cart")
  }
  
  return (
      <div onClick={toCart}>
          <GrCart size="32" className="cart ml-5"/>
          {cart.length && <span className='cart__qty'>({cart.length})</span>}
      </div> 
  )
}

export default CartWidget