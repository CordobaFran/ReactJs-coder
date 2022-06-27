import React, { useState } from 'react'
import product01 from '../../assets/img/Product01.jpg'

const ItemCounter = ({handleAdd, initialStock}) => {
    
    const [counter, setCounter] = useState(0);

    const onAdd = ()=>{
        if(counter < initialStock){
            setCounter(counter + 1)
        }
    }
    const onDecrement = ()=>{
        if(counter > 0){
            setCounter(counter - 1)          
        }
    }
    
    return (
        <div className='text-center'>
            <p className='h2 font-weight-bold my-3'>Plato de aluminio</p>
            <img src={product01} alt="product01" className='w-25 my-5' />
            <p className='h4 font-weight-normal'>Cantidad: {counter}</p>
            <button onClick={onAdd} className="btn btn-secondary mx-2">+</button>
            <button onClick={onDecrement} className="btn btn-secondary mx-2">-</button>
            <br></br>
            <button onClick={handleAdd} className="btn btn-secondary my-3">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter