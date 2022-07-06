import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1 className='text-center my-5 h2'>{product.title}</h1>
        <img className='d-flex mx-auto w-25' src={product.image} alt="prodcuctImage" />
        <h2 className='font-weight-bold text-center my-5'>USD {product.price}</h2>
        <h3 className='d-flex mx-auto h5 w-25'>{product.description}</h3>
    </div>
  )
}

export default ItemDetail