import React, { useState } from 'react'

const ItemCounter = ({ onConfirm, initialStock }) => {

    const [counter, setCounter] = useState(0);

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
            <button onClick={onDecrement} className="btn btn-secondary mx-2">-</button>
            <button onClick={onAdd} className="btn btn-secondary mx-2">+</button>
            <br></br>
            <button onClick={handleAdd} className="btn btn-secondary my-3">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter