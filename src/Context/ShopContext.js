import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

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

  const updateStock = (product, productFbStock) => {
    const productStockToUpdate = isInCart(product)
    if (productStockToUpdate) {
      productStockToUpdate.stock = productFbStock
      setCart([...cart])
    }
  }

  const updateQuantity = (product, qty) => {
    const productQtyToUpdate = isInCart(product)
    if (productQtyToUpdate) {
      productQtyToUpdate.quantity = qty
      setCart([...cart])
    }
  }

  const removeItem = (itemId) => {
    const remove = cart.filter(el => el.id !== itemId)
    setCart(remove)
  }

  const removeAll = () => {
    setCart([])
  }

  const isInCart = (product) => {
    return cart.find(el => el.id === product.id)
  }

  return (
    <Shop.Provider value={{ addItem, cart, setCart, updateStock, updateQuantity, removeItem, removeAll }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider