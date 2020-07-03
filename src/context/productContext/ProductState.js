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
  SET_CURRENT_ID_FOR_PROJECT,
  RETURNED_PRODUCT
} from "../types";


//TODO remove unused functions
const ProductState = props => {
  const productsInitialState = {
    productsList: [],
    returnedProject: null,
    returnedProduct: null,

    layoutsList: [],
    projectsList: [],
    themesList: [],
    slidesIdsList: [],

    currentProject: null,
    slider: [],

    message: ""
  };
  const [state, dispatch] = useReducer(productReducer, productsInitialState);

  const { productsList, returnedProduct, returnedProject, layoutsList, projectsList, themesList, slidesIdsList, currentProject, slider, message, } = state;

  useEffect(() => {
    getLayouts();
    getProjects();
  }, [])




  /////////////////////////////////  SLIDER  /////////////////////////////////////////


  const addSlide = (item) => {
    const { id, type } = item;
    slidesIdsList.push(item.id)
    // push layout id to slider
    getLayoutsForId(id)
  };

  const removeSlide = (item) => {
    // const propsss =
    dispatch({ type: REMOVE_SLIDE_FOR_PRODUCT, payload: item })
  };



  /////////////////////////////////  PRODUCTS  /////////////////////////////////////////

  const getProducts = () => {
    console.log("getProducts a fost apelata")

    axios
      .get("/product")
      .then((res) => {
        dispatch({ type: GET_PRODUCTS, payload: res.data })
        console.log("getProducts runned succesfull")

      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("getProducts runned unsuccesfull")
      });
  };

  //TODO verifica endpointul
  const deleteProductForId = (layoutId) => {
    axios
      .get(`/product/${layoutId}/delete`)
      .then((res) => dispatch({ type: DELETE_PRODUCT_BY_ID, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };



  //TODO not implemented yet
  const duplicateProductForId = (layoutId) => {
    axios
      .get(`/product/${layoutId}/duplicate`)
      .then((res) =>
        dispatch({ type: DUPLICATE_PRODUCT_BY_ID, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };



  //TODO on click of button "SALVEAZA"
  const updateProduct = async (slidesIdsList, productUid) => {
    console.log("updateProduct started")
    console.log(slidesIdsList)
    console.log(productUid)
    axios
      .put(`/product`, { slider, productUid })
      .then((res) => {
        console.log("updateProduct was successfull")
        return dispatch({ type: CREATE_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: MSG_PRODUCTS, payload: err })
        console.log("updateProduct was unsuccessfull")
      });
    //console.log("getProducts a fost apelata din ProductState")
  };


  //TODO on product click "RETRIEVES AN PRODUCT"
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

  };


  /////////////////////////////////////////////////////////////////////////////////////







  /////////////////////////////////  PROJECTS  /////////////////////////////////////////

  const getProjects = () => {
    axios
      .get("/project")
      .then((res) =>
        dispatch({ type: GET_PROJECTS_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    console.log("getProjects a fost apelata din ProductState");
  };

  /////////////////////////////////////////////////////////////////////////////////////





  /////////////////////////////////  THEMES  /////////////////////////////////////////
  // TODO daca renuntam la teme sa stergem metoda
  const getThemes = () => {
    axios
      .get("/theme")
      .then((res) =>
        dispatch({ type: GET_THEMES_FOR_PRODUCTS, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
    console.log("getThemes a fost apelata din ProductState");
  };

  /////////////////////////////////////////////////////////////////////////////////////





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
    axios
      .get(`/layout/${layoutId}`)
      .then((res) => {
        dispatch({ type: ADD_SLIDE_FOR_PRODUCT, payload: res.data })

        let projecId;
        let idOfLayout;
        axios.post(`/slider/${projecId}`, idOfLayout)
        // persist slide with project id
        // add(`/slider/${projectId}`)
      })
      .then(res => { return res.status(200).json(res.data) })
      .catch((err) => dispatch({ type: MSG_PRODUCTS, payload: err }));
  };

  /////////////////////////////////////////////////////////////////////////////////////



  return (
    <ProductContext.Provider
      value={{
        productsList,
        returnedProject,
        returnedProduct,

        layoutsList,
        projectsList,
        themesList,
        slidesIdsList,
        message,
        slider,
        currentProject,

        updateProduct,
        getProductForId,
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
