import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

  const [stateA, setStateA] = useState("default");
  const [cart, SetCart] = useState([]);
  
  

  return (
    <Shop.Provider value={ stateA }>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider