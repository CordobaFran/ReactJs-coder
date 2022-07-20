import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Item = ({ product }) => {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card my-4 itemCard' onClick={handleDetail}>
      <img src={product.image} className='card-img-top itemCard__img' alt="cardimg" />
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title itemCard__title'>$ {product.price}</h5>
        <button className='btn btn-info justify-item-center w-50 mx-auto'>Comprar</button>
      </div>
    </div>
  )
}

export default Item