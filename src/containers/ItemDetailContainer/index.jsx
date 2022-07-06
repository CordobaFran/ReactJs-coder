import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail'
import LoadingEffect from '../../components/LoadingEffect';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null)

    const params = useParams();
    console.log(productDetail)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const resp = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await resp.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getProducts();
    }, [params])

    return (
        <div>
            {productDetail ?
                <ItemDetail product={productDetail} />
                :
                <LoadingEffect />
            }
        </div>
    )
}

export default ItemDetailContainer