import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetBanner from '../../assets/img/BannerPetshop.jpg'
import ItemList from '../../components/ItemList'
import LoadingEffect from '../../components/LoadingEffect'
import "./style.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState(null);

  const params = useParams();

  //fetch products first time
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

  //filter and render products per category
  useEffect(() => {
    const productsFiltered = () => {
      const productF = products.filter(filters)
      function filters(product) {
        return product.category === params.categoryId
      }
      return productF
    }

    if (products) setProductsFiltered(productsFiltered)
    if (params.categoryId === "all" || !params.categoryId) {
      setProductsFiltered(products)
    }
  }, [params, products])


  return (
    <div className='justify-content-center flex-column'>
      {!params.categoryId ?
        <h1 className="h3 text-center mx-auto mt-4 title">{greeting}</h1>
        :
        null
      }
      {!params.categoryId ?
        <img className="img-fluid banner" src={PetBanner} alt="banner" />
        :
        null
      }
      <div>
        {products ?
          productsFiltered ?
            <ItemList products={productsFiltered} />
            :
            <LoadingEffect />
          :
          <LoadingEffect />
        }
      </div>
    </div>
  )
}

export default ItemListContainer