import React, { useReducer, useEffect, useState } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import axios from "axios";

import {
  // Retrieves products and layouts
  GET_PRODUCTS,
  GET_LAYOUTS_FOR_PRODUCTS,
  // Get and update for product
  UPDATE_PRODUCT,
  GET_PRODUCT_BY_ID,
  // Add and remove slide product
  ADD_SLIDE_FOR_PRODUCT,
  REMOVE_SLIDE_FOR_PRODUCT,
  // Message
  MSG_PRODUCTS,

} from "../types";


//TODO remove unused functions
const ProductState = props => {
  const productsInitialState = {
    //Displays current product retrieved from Db
    returnedProduct: null,
    recursiveBackground: null,

    layoutsList: [],
    productsList: [],
    slidesIdsList: [],

    // Keeps the state of slides from retrieved returnedProduct and added from layouts or covers
    slider: [],

    message: null
  };
  const [state, dispatch] = useReducer(productReducer, productsInitialState);

  const { productsList, returnedProduct, returnedProject, recursiveBackground, layoutsList, projectsList, themesList, slidesIdsList, currentProject, slider, message, } = state;

  useEffect(() => {
    getLayouts();
    getProducts();
    if (returnedProduct != null) {
      //if returned product is not null, slides will come from retrieved product
      dispatch({ type: ADD_SLIDE_FOR_PRODUCT, payload: returnedProduct.slider })
    }
  }, [])




  /////////////////////////////////  SLIDER  /////////////////////////////////////////


  const addSlide = (item) => {
    console.log("addSlide started")
    const { id, type } = item;
    slidesIdsList.push(item.id)
    // push layout id to slider
    getLayoutsForId(id)
    console.log("addSlide ended")
  };

  const removeSlide = (item) => {
    dispatch({ type: REMOVE_SLIDE_FOR_PRODUCT, payload: item })
  };

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





  /////////////////////////////////  PRODUCTS  /////////////////////////////////////////

  const getProducts = () => {
    console.log("getProducts a fost apelata")

    axios
      .get("/products")
      .then((res) => {
        dispatch({ type: GET_PRODUCTS, payload: res.data })
        console.log("getProducts runned succesfull")

      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("getProducts runned unsuccesfull")
      });
  };


  const updateProduct = (slidesIdsList, productUid) => {
    console.log("updateProduct started")
    console.log(slidesIdsList)
    console.log(productUid)
    axios
      .put(`/product`, { slider, productUid })
      .then((res) => {
        console.log("updateProduct was successfull")
        dispatch({ type: UPDATE_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("updateProduct was unsuccessfull")
      });
  };

  const updateProductBackground = (picture, id) => {
    console.log("updateProductBackground started")
    console.log(picture)
    console.log(id)

    const fd = new FormData();
    fd.append('image', picture, picture.name);
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

    axios
      .post(`/product/${id}/background`, fd)
      .then((res) => {
        console.log("updateProductBackground was successfull")
        dispatch({ type: UPDATE_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("updateProductBackground was unsuccessfull")
      });



  };


  const getProductForId = (productId) => {
    console.log("getProductForId started")
    if (productId === null) { return console.error("Missing product id"); }
    axios
      .get(`/product/${productId}`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data })
        console.log("getProductForId runned successfull")
      })
      .catch((err) => {
        console.log("getProductForId runned unsuccessfull")
        dispatch({ type: MSG_PRODUCTS, payload: err })
      });
    console.log(productsInitialState)
  };



  const getProductForProjectsDisplay = (projectId) => {
    console.log("getProductForProjectsDisplay started")
    if (projectId === null) { return console.error("Missing project id"); }
    axios
      .get(`/productByProjectId/${projectId}`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data })
        console.log("getProductForId runned successfull")
      })
      .catch((err) => {
        console.log("getProductForId runned unsuccessfull")
        dispatch({ type: MSG_PRODUCTS, payload: err })
      });
  };


  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>







  /////////////////////////////////  LAYOUTS  /////////////////////////////////////////

  const getLayouts = () => {
    axios
      .get("/layout")
      .then((res) =>
        dispatch({ type: GET_LAYOUTS_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    console.log("getLayouts a fost apelata din ProductState");
  };


  const getLayoutsForId = (layoutId) => {
    if (layoutId === null) { return console.error("Missing layout id") }
    console.log("getLayoutsForId started")
    axios
      .get(`/layout/${layoutId}`)
      .then((res) => {
        dispatch({ type: ADD_SLIDE_FOR_PRODUCT, payload: res.data })
        console.log("getLayoutsForId finished succesfull")
      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("getLayoutsForId finished unsuccesfull")
      });
  };

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



  return (
    <ProductContext.Provider
      value={{
        returnedProduct,
        recursiveBackground,

        layoutsList,
        productsList,
        slidesIdsList,

        message,
        slider,

        updateProduct,
        updateProductBackground,
        getProductForId,
        addSlide,


        //For projects
        getProductForProjectsDisplay,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
