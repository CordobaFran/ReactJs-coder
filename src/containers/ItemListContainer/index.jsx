import React, { useEffect, useState } from 'react'
import PetBanner from '../../assets/img/BannerPetshop.jpg'
import ItemList from '../../components/ItemList'
import LoadingEffect from '../../components/LoadingEffect'
import ItemDetailContainer from '../ItemDetailContainer'
import "./style.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        setProducts(data)
      } catch (error) {

      }
    }
    getProducts();
  }, [])

  return (
    <div className='justify-content-center flex-column'>
      <h1 className="h3 text-center mx-auto mt-4 title">{greeting}</h1>
      <img className="img-fluid banner" src={PetBanner} alt="banner" />
      <div>
        {products ?
          <ItemList products={products} />
          :
          <LoadingEffect /> 
        }
      </div>
    </div>
    // <div>
    //   <ItemDetailContainer/>
    // </div>
  )
}

export default ItemListContainer