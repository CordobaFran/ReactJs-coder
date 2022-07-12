import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCounter from '../ItemCounter/index'
import "./style.css"

const ItemDetail = ({ product }) => {

  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0)

  const handleConfirm = (qty)=>{
    setQtyAdded(qty)
  }
  console.log(qtyAdded)

  const handleFinish = ()=>{
    navigate('/cart')
  }

  return (

    <div>
      <div className="container mt-5 shadow col-11 col-md-10">
        <div className="row">
          <div className="col-12 col-md-9 my-auto">
            <img className='d-flex mx-auto w-50' src={product.image} alt="prodcuctImage" />
          </div>
          <div className="col-12 col-md-3 border rounded">
            <h1 className='font-weight-bold text-left my-5 h4'>{product.title}</h1>
            <h2 className='text-center my-5 h3'>USD {product.price}</h2>
            <div className='my-5'>
              <p className='text-center h4'>Opiniones</p>
              <p className='text-center font-weight-bold h3'>{product.rating.rate}</p>
              <p className='text-center'>promedio entre <span className='font-weight-bold'>{product.rating.count}</span> opiones</p>
            </div>
            {!qtyAdded ?
              <ItemCounter onConfirm={handleConfirm} initialStock={8}/>
              :
              <>
                <div className='text-center'>
                  <button onClick={handleFinish} className="btn btn-secondary my-3">Terminar Compra</button>
                </div>
              </>
              
            }
            
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 border rounded">
            <h2 className='my-3'>Descripción</h2>
            <h3 className='d-flex mx-auto h5'>{product.description}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail