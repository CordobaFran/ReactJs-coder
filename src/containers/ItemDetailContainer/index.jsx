import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail'
import LoadingEffect from '../../components/LoadingEffect';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../components/Firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null)

    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const docRef = doc(db, "items", params.productId);
                const docSnap = await getDoc(docRef);
                const productDetail = { id: docSnap.id, ...docSnap.data() }

                if (docSnap.exists()) {
                    setProductDetail(productDetail)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
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