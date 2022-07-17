import React, { useState } from 'react'
import './style.css'

const ItemCounter = ({ onConfirm, initialStock }) => {

    const [counter, setCounter] = useState(1);

    const onAdd = () => {
        if (counter < initialStock) {
            setCounter(counter + 1)
        }
    }
    const onDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleAdd = () => {
        if(counter <= initialStock) {
            onConfirm(counter)
        }
    }

    return (
        <div className='text-center'>
            <p className='h5 font-weight-normal my-3'>Cantidad: {counter}</p>
            <button onClick={onDecrement} className="btn__mod btn btn-info mx-2">-</button>
            <button onClick={onAdd} className="btn__mod btn btn-info mx-2">+</button>
            <br></br>
            <button onClick={handleAdd} className="btn btn-info my-3 w-100">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter