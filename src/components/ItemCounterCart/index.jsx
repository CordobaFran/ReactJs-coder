import React, { useContext} from 'react'
import { Shop } from '../../Context/ShopContext'
import './style.css'

const ItemCounterCart = ({stock, cant, product }) => {

    const {updateQuantity} = useContext(Shop)

    const onAdd = () => {
        if (product.quantity < stock) {
            let quantity = product.quantity + 1
            updateQuantity(product, quantity)
        } else if (product.quantity > product.stock) {
            let quantity = product.stock
            updateQuantity(product, quantity)
        }
    }
    const onDecrement = () => {
        if (product.quantity > 1) {
            let quantity = product.quantity - 1
            updateQuantity(product, quantity)
        }
    }

    return (
        <div className='d-flex text-center flex-column'>
            <div className="d-flex align-items-center">
                <button onClick={onDecrement} className="btn__mod btn btn-info mx-2">-</button>
                <p className='my-3'>Cant: {cant}</p>
                <button onClick={onAdd} className="btn__mod btn btn-info mx-2">+</button>
            </div>
            <p className='font-weight-normal'>{stock} disponibles</p>
            <br></br>
        </div>
    )
}

export default ItemCounterCart