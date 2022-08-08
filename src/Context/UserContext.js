import React, { createContext, useState } from 'react'

export const User = createContext()

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState([])

    const addUser = (user)=>{
        setUserData(user)
    }

  return (
        <User.Provider value={{addUser, userData, setUserData}}>
            {children}
        </User.Provider>
  )
}

export default UserProvider