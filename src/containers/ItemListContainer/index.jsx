import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetBanner from '../../assets/img/BannerPetshop.jpg'
import ItemList from '../../components/ItemList'
import LoadingEffect from '../../components/LoadingEffect'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../components/Firebase/config'
import "./style.css"


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState(null);

  const params = useParams();

  //fetch products first time
  useEffect(() => {

    const getProducts = async () => {
      try {
        const q = query(collection(db, "items"));
        const querySnapshot = await getDocs(q);
        const productos = []

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() })
        });

        setProducts(productos)
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
        <h1 className="h3 text-center mx-auto mt-2 mt-md-4 title">{greeting}</h1>
        :
        null
      }
      {!params.categoryId ?
        <img className="img-fluid banner mt-5 mt-md-0 px-0 px-md-5" src={PetBanner} alt="banner" />
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