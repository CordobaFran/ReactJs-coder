import React, { createContext } from 'react'
import { useState } from 'react'


export const Shop = createContext()

const ShopProvider = ({ Children }) => {

  const [stateA, setStateA] = useState("default")

  return (
    <Shop.Provider value={{ stateA }}>
      {Children}
    </Shop.Provider>
  )
}

export default ShopProvider