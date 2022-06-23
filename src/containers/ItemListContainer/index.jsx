import React from 'react'
import PetBanner from '../../assets/img/BannerPetshop.jpg'
import "./style.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div className='d-flex justify-content-center'>
        <h1 className="h3 text-center mt-4 title">{greeting}</h1>
        <img className="img-fluid banner"src={PetBanner} alt="banner" />
    </div>
  )
}

export default ItemListContainer