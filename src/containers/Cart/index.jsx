import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Cart = () => {

  const { removeItem, removeAll } = useContext(Shop)
  const { cart } = useContext(Shop)

  const navigate = useNavigate();

  const itemTotal = (price, qty) => {
    return qty * price;
  }

  const totalCost = () => {
    let sum = 0
    cart.forEach(element => {
      sum += (element.price * element.quantity)
    });
    return sum
  }

  const buyProducts = () => {
    navigate('/')
  }

  const checkout = () => {
    const total = totalCost()
    const asd = {
      buyer: {
        name: "Franco Cordoba",
        phone: 113245678,
        email: "hola@hola.com"
      },
      items: [{ cart }],
      total
    }
    console.log(asd)
  }



  return (
    <>
      <div className='table__container w-75 mx-auto pt-4 mt-5'>
        <table className='mx-auto'>
          {cart.length ?
            <>
              {cart.map(product => {
                return <>
                  <tr key={product.id} className='tr--bottom'>
                    <td className='td__img px-3 py-3'><img className='img-fluid img' src={product.image} alt={product.title}></img></td>
                    <td className='px-3 text-center'>{product.title}</td>
                    <td className='px-3 text-center'>Cant: {product.quantity}</td>
                    <td className='px-3 text-center'>US$ {Math.round(itemTotal(product.price, product.quantity) * 100) / 100} </td>
                    <td className='px-3 text-center'> <button className='mx-3 btn btn-info justify-item-center mx-auto' onClick={() => { removeItem(product.id) }}>Quitar Producto</button></td>
                  </tr>
                </>
              })
              }
              <tr>
                <td className='td__img'></td>
                <td></td>
                <td className='px-3 text-center font-weight-bold'>TOTAL</td>
                <td className='px-3 text-center font-weight-bold'>US$ {Math.round(totalCost() * 100) / 100}</td>
                <td className='px-3 text-center'><button className='mx-3 btn btn-success justify-item-center mx-auto' onClick={() => { checkout() }}>Finalizar Compra</button></td>
              </tr>
            </>
            :
            <div className='text-center'>
              <p className='font-weight-bold h4 mt-3'>No tiene productos en el carrito.</p>
              <button className='my-5 btn btn-info justify-item-center mx-auto' onClick={() => { buyProducts() }}>Comprar Productos</button>
            </div>
          }
        </table>
      </div>
      {cart.length ?
        <>
          <div className='text-center'>
            <button className='my-5 btn btn-danger justify-item-center mx-auto' onClick={() => { removeAll() }}>Eliminar Todos</button>
          </div>
        </>
        :
        null}
    </>
  )
}

export default Cart