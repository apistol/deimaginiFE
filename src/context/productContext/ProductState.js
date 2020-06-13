import React, { useReducer, useEffect, useState } from 'react'
import ProductContext from "./productContext"
import productReducer from "./productReducer"
import axios from "axios"

import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    GET_PRODUCT_BY_ID,
    DELETE_PRODUCT_BY_ID,
    DUPLICATE_PRODUCT_BY_ID,
    CREATE_PRODUCT_ERROR,
} from '../types'

const ProductState = props => {

    const [products, setProducts] = useState({
        productList: [],
        returnedProduct: null,
    })


    const { productList, returnedProduct } = products;


    const [state, dispatch] = useReducer(productReducer, products)

    useEffect(() => {
        getProducts()
    }, [productList])


    const getProducts = () => {
        axios
            .get("/product")
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    const postProduct = async (newProduct) => {
        axios
            .post("/product", newProduct)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    const getProductsForId = (productId) => {
        if (productId === null) { return console.error("Missing layout id") }
        axios
            .get(`/product/${productId}`)
            .then((res) => {
                setProducts({ ...products, returnedProduct: res.data })
            })
            .catch((err) => console.log(err));
    };

    const deleteProductForId = (layoutId) => {
        axios
            .get(`/product/${layoutId}/delete`)
            .then((res) => {
                console.log(res);
                getProducts();
            })
            .catch((err) => console.log(err));

    };

    const duplicateProductForId = (layoutId) => {
        axios
            .get(`/product/${layoutId}/duplicate`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        getProducts();
    };




    return (
        <ProductContext.Provider
            value={{
                getProducts,
                postProduct,
                getProductsForId,
                deleteProductForId,
                duplicateProductForId,

                productList,
                returnedProduct,
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState