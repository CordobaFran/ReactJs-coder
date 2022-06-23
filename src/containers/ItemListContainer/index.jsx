import React from 'react'
import PetBanner from '../../assets/img/BannerPetshop.jpg'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="h3 text-center mt-4">{greeting}</h1>
        <img className="img-fluid"src={PetBanner} alt="banner" />
    </div>
  )
}

export default ItemListContainer