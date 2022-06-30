import React from 'react'
import "./style.css"

const Item = ({product}) => {
  return (
    <div className='card my-4 itemCard'>
        <img src={product.image} className='card-img-top itemCard__img' alt="cardimg"/>
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title itemCard__title'>{product.title}</h5>
            <p className='card-text itemCard__text'>{product.description}</p>
            <a href="#" className='btn btn-primary justify-item-center w-50 mx-auto'>Go somewhere</a>
        </div>
    </div>
      )
}

export default Item