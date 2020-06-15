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

export default (state, action) => {
  switch (action.type) {
    case GET_LAYOUTS_FOR_PRODUCTS:
      return {
        ...state,
        layoutsList: [...action.payload],
      };
    case GET_THEMES_FOR_PRODUCTS:
      return {
        ...state,
        themesList: [...action.payload],
      };
    case GET_PROJECTS_FOR_PRODUCTS:
      return {
        ...state,
        projectsList: [...action.payload],
      };
    case DUPLICATE_PRODUCT_BY_ID:
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };
    case DELETE_PRODUCT_BY_ID:
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        returnedProduct: [...action.payload],
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: [...action.payload],
      };
    case ADD_SLIDE_FOR_PRODUCT:
      return {
        ...state,
        slider: [ ...state.slider , action.payload],
      };
    case REMOVE_SLIDE_FOR_PRODUCT:
      return {
        ...state,
        slider: state.slider.filter( s => s.id !== action.payload.id  )
      };    
    case MSG_PRODUCTS:
      return {
        ...state,
        productsList: { ...action.payload },
      };
    default:
      return state;
  }
};