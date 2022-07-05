import { React, useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const resp = await fetch("https://fakestoreapi.com/products/2");
                const data = await resp.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getProducts();
    }, [])

    return (
        <div>
            <ItemDetail product={productDetail}/>
        </div>
    )
}

export default ItemDetailContainer