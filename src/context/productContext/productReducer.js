import {
  GET_PRODUCTS,
  GET_LAYOUTS_FOR_PRODUCTS,

  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT,

  ADD_SLIDE_FOR_PRODUCT,
  REMOVE_SLIDE_FOR_PRODUCT,
  UPDATE_SLIDES,
  UPDATE_SLIDES_BACKGROUND,

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
        message: { type: "success", message: "Produs actualizat cu succes, va rugam faceti refresh." },
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        returnedProduct: { ...action.payload },
        slider: action.payload.slider,
        recursiveBackground: action.payload.recursiveBackground,
        message: { type: "success", message: "Produs servit cu succes." },
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
        message: { type: "success", message: "Un slide a fost adaugat produsului, click ,,Salveaza produs'' daca doresti sa salvezi specificatiile." },
      };
    case UPDATE_SLIDES:
      return {
        ...state,
        message: { type: "success", message: "Slide-ul a fost actualizat, va rugam faceti refresh." },
      };
    case UPDATE_SLIDES_BACKGROUND:
      return {
        ...state,
        message: { type: "success", message: "Background-ul Slide-ului a fost actualizat, va rugam faceti refresh." },
      };
    case REMOVE_SLIDE_FOR_PRODUCT:
      return {
        ...state,
        message: { type: "success", message: "Slide-ul a fost sters cu succes, va rugam faceti refresh paginii." },

      };
    case MSG_PRODUCTS:
      return {
        ...state,
        message: { type: "success", message: action.payload },
      };
    default:
      return state;
  }
};
