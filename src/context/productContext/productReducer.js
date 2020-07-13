import {
  GET_PRODUCTS,
  GET_LAYOUTS_FOR_PRODUCTS,

  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT,

  ADD_SLIDE_FOR_PRODUCT,
  REMOVE_SLIDE_FOR_PRODUCT,

  MSG_PRODUCTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_LAYOUTS_FOR_PRODUCTS:
      return {
        ...state,
        layoutsList: [...action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        recursiveBackground: { ...action.payload },
        message: { type: "success", message: "Product updated successfull" },
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        returnedProduct: { ...action.payload },
        slider: action.payload.slider,
        recursiveBackground: action.payload.recursiveBackground,
        message: { type: "success", message: "Product retrieved successfull" },
      };
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: [...action.payload],
      };
    case ADD_SLIDE_FOR_PRODUCT:
      return {
        ...state,
        slider: [...state.slider, action.payload],
      };
    case REMOVE_SLIDE_FOR_PRODUCT:
      return {
        ...state,
        slider: state.slider.filter(s => s.id !== action.payload.id)
      };
    case MSG_PRODUCTS:
      return {
        ...state,
        message: { ...action.payload },
      };
    default:
      return state;
  }
};
