import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, query, where } from "firebase/firestore";
import { db } from '../../components/Firebase/config'
import { User } from "../../Context/UserContext"
import swal from 'sweetalert';
import "./style.css"
import ItemCounterCart from '../../components/ItemCounterCart';

const Cart = () => {

  const { removeItem, removeAll } = useContext(Shop)
  const { cart, updateStock, updateQuantity, setCart } = useContext(Shop)
  const { userData } = useContext(User)

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
    const date = new Date().toLocaleString()
    const order = {
      buyer: {
        name: userData[0].name,
        phone: userData[0].phone,
        email: userData[0].email
      },
      items: [{ cart }],
      total: total,
      time: date
    }
    swalMsjNotInStock(order)
  }

  const addOrdertoFb = async (order) => {
    // Add a new document with a generated id
    const newOrderRef = collection(db, "orders");
    // later...
    await addDoc(newOrderRef, order).then(({ id }) => {
      swal("Orden Generada", `Se ha creado la orden:\n\nID: ${id}\n\nHora: ${order.time} `, "success");
      setCart([])
    });
  }

  // --- STOCK CONTROL BEFORE CREATE THE ORDER ---
  
  const swalMsjNotInStock = (order) => {
    checkStock().then(el => {
      if (el.length) {
        const title = el.map((el) => {
          updateQuantity(el, el.stock)
          return el.title
        })
        swal({
          title: "Te pedimos disculpas",
          text: `Mientras estabas comprando los siguientes productos quedaron sin stock: \n \n - ${title.join("\n - ")} \n \n Se actualizará la cantidad automáticamente`,
          icon: "error",
          button: "Volver",
        })
      } else {
        addOrdertoFb(order)
      }
    })
  }

  const checkStock = () => {
    const notInStock = cart.map(async (el) => {
      if (el.quantity > await checkStockFB(el.id)) {
        updateStock(el, await checkStockFB(el.id))
        return { id: el.id, title: el.title, stock: el.stock }
      }
    })
    return Promise.all(notInStock).then(el => el.filter(element => { return element }))
  }

  const checkStockFB = async (cartId) => {
    let stock;
    try {
      const q = query(collection(db, "items"), where(documentId(), "==", cartId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return stock = doc.data()
      });
      return stock.stock
    } catch (error) {
    }
  }


  return (
    <>
      <div className='table__container w-75 mx-auto pt-4 mt-5'>
        <table className='mx-auto'>
          <tbody>
            {cart.length ?
              <>
                {cart.map(product => {
                  return <tr key={product.id} className='tr--bottom'>
                    <td className='td__img px-3 py-3'><img className='img-fluid img' src={product.image} alt={product.title}></img></td>
                    <td className='px-3 text-center'>{product.title}</td>
                    <td><ItemCounterCart cant={product.quantity} stock={product.stock} product={product}/></td>
                    <td className='px-3 text-center'>$ {Math.round(itemTotal(product.price, product.quantity) * 100) / 100} </td>
                    <td className='px-3 text-center'> <button className='mx-3 btn btn-info justify-item-center mx-auto' onClick={() => { removeItem(product.id) }}>Quitar Producto</button></td>
                  </tr>
                })}
                <tr>
                  <td className='td__img'></td>
                  <td></td>
                  <td className='px-3 text-center font-weight-bold'>TOTAL</td>
                  <td className='px-3 text-center font-weight-bold'>$ {Math.round(totalCost() * 100) / 100}</td>
                  <td className='px-3 text-center'>
                    {userData.length === 0 ?
                      <button className='mx-3 btn btn-success justify-item-center mx-auto' data-toggle="modal" data-target="#staticBackdrop">Finalizar Compra</button>
                      :
                      <button className='mx-3 btn btn-success justify-item-center mx-auto' onClick={() => {
                        checkout()
                      }}>Finalizar Compra</button>
                    }
                  </td>
                </tr>
              </>
              :
              <tr className='text-center'>
                <td>
                  <p className='font-weight-bold h4 mt-3'>No tiene productos en el carrito.</p>
                  <button className='my-5 btn btn-info justify-item-center mx-auto' onClick={() => { buyProducts() }}>Comprar Productos</button>
                </td>
              </tr>
            }
          </tbody>
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