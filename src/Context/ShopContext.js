import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

  const [stateA, setStateA] = useState("default");
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const repeatedProduct = isInCart(product)
    
    if (repeatedProduct) {
      repeatedProduct.quantity += quantity
      setCart([...cart])
    } else {
      setCart([...cart, { ...product, quantity }])
    }

  }

  const removeItem = (itemId) => {
    const remove = cart.filter(el => el.id !== itemId)
    setCart(remove)
    
  }

  const removeAll = ()=>{
    setCart([])
  }

  const isInCart = (product) => {
    return cart.find(el => el.id === product.id)
  }


  return (
    <Shop.Provider value={{ stateA, setStateA, addItem, cart, removeItem, removeAll }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider