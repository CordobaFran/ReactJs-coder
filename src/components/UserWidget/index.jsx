import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import UserForm from '../../containers/UserForm'
import './style.css'

const UserWidget = () => {

  return (
    <div>
        <BsFillPersonFill size="32" className="user ml-5" data-toggle="modal" data-target="#staticBackdrop"/>
        <UserForm/>
    </div>
  )
}

export default UserWidget