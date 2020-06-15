import React, { useReducer, useEffect, useState } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import axios from "axios";

import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  GET_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  DUPLICATE_PRODUCT_BY_ID,
  GET_LAYOUTS_FOR_PRODUCTS,
  GET_THEMES_FOR_PRODUCTS,
  GET_PROJECTS_FOR_PRODUCTS,
  MSG_PRODUCTS,
  ADD_SLIDE_FOR_PRODUCT,
  REMOVE_SLIDE_FOR_PRODUCT,
} from "../types";

const ProductState = props => {
  const productsInitialState = {
    productsList: [],
    returnedProduct: null,

    layoutsList: [],
    projectsList: [],
    themesList: [],

    slider: [],

    message: ""
  };
  const [state, dispatch] = useReducer(productReducer, productsInitialState);

  const { productsList, returnedProduct, layoutsList, projectsList, themesList, slider, message } = state;

  useEffect(() => {
    getProducts();
    getLayouts();
    getProjects();
    getThemes();
  }, [])

  const getProducts = () => {
    axios
      .get("/product")
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    //console.log("getProducts a fost apelata din ProductState")
  };

  const postProduct = async (newProduct) => {
    axios
      .post("/product", newProduct)
      .then((res) => dispatch({ type: CREATE_PRODUCT, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    //console.log("getProducts a fost apelata din ProductState")
  };

  const getProductsForId = (productId) => {
    if (productId === null) { return console.error("Missing layout id"); }
    axios
      .get(`/product/${productId}`)
      .then((res) => dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };

  const deleteProductForId = (layoutId) => {
    axios
      .get(`/product/${layoutId}/delete`)
      .then((res) => dispatch({ type: DELETE_PRODUCT_BY_ID, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };

  const duplicateProductForId = (layoutId) => {
    axios
      .get(`/product/${layoutId}/duplicate`)
      .then((res) =>
        dispatch({ type: DUPLICATE_PRODUCT_BY_ID, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };

  const getLayouts = () => {
    axios
      .get("/layout")
      .then((res) =>
        dispatch({ type: GET_LAYOUTS_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    // console.log("getLayouts a fost apelata din ProductState");
  };

  const getThemes = () => {
    axios
      .get("/theme")
      .then((res) =>
        dispatch({ type: GET_THEMES_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    // console.log("getThemes a fost apelata din ProductState");
  };

  const getProjects = () => {
    axios
      .get("/project")
      .then((res) =>
        dispatch({ type: GET_PROJECTS_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    // console.log("getProjects a fost apelata din ProductState");
  };

  const addSlide = (item) => {
    const { id, type } = item;
    getLayoutsForId(id)
  };

  const removeSlide = (item) => {
    const propsss =
      dispatch({ type: REMOVE_SLIDE_FOR_PRODUCT, payload: item })
  };

  const getLayoutsForId = (layoutId) => {
    if (layoutId === null) { return console.error("Missing layout id") }
    axios
      .get(`/layout/${layoutId}`)
      .then((res) => (dispatch({ type: ADD_SLIDE_FOR_PRODUCT, payload: res.data })))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };

  return (
    <ProductContext.Provider
      value={{
        productsList,
        returnedProduct,

        layoutsList,
        projectsList,
        themesList,
        message,
        slider,

        postProduct,
        getProductsForId,
        deleteProductForId,
        duplicateProductForId,
        addSlide,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
