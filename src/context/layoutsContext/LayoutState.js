import React, { useReducer, useEffect, useState } from "react";
import LayoutContext from "./layoutContext";
import layoutReducer from "./layoutReducer";
import axios from "axios";

import {
  GET_LAYOUTS,
  CREATE_LAYOUT,
  GET_LAYOUT_BY_ID,
  DELETE_LAYOUT_BY_ID,
  DUPLICATE_LAYOUT_BY_ID,
  MSG_LAYOUT,
} from "../types";

const LayoutState = (props) => {
  const [initialState , setInitialState ]= useState({
    layoutsList: [],
    returnedLayout: null,
    msgLayout: "",

    name: "",
    categLayout: "",
    opening: false,

    tipLayout: "",
    layoutWidth: "",
    layoutHeight: "",
    hasText: false,

    returnedLayout: "",
    coverHasImage: false,
    coverImageWidth: "",
    coverImageHeight: "",
    coverImageTopPosition: "",
    coverImageLeftPosition: "",

    paddingBetweenImages: "",
    borderWidth: "",
    dropShadow: "",

    hasText: false,
    editableText: false,
    editableBackground: false,

    rowsLayout: "",
    layoutPadding: "",
    row1: "",
    row1Col1: "",
    row1Col2: "",
    row1Col3: "",
    row1Col4: "",
    row2: "",
    row2Col1: "",
    row2Col2: "",
    row2Col3: "",
    row2Col4: "",
    row3: "",
    row3Col1: "",
    row3Col2: "",
    row3Col3: "",
    row3Col4: "",
    row4: "",
    row4Col1: "",
    row4Col2: "",
    row4Col3: "",
    row4Col4: "",
    zoom: 1,

    // Second layout for opening type pages

    secondLayoutTipLayout: "",
    secondLayoutLayoutWidth: "",
    secondLayoutLayoutHeight: "",
    secondLayoutHasText: false,

    secondLayoutCoverHasImage: false,
    secondLayoutCoverImageWidth: "",
    secondLayoutCoverImageHeight: "",
    secondLayoutCoverImageTopPosition: "",
    secondLayoutCoverImageLeftPosition: "",

    secondLayoutPaddingBetweenImages: "",
    secondLayoutBorderWidth: "",
    secondLayoutDropShadow: "",

    secondLayoutHasText: false,
    secondLayoutEditableText: false,
    secondLayoutEditableBackground: false,

    secondLayoutRowsLayout: "",
    secondLayoutLayoutPadding: "",
    secondLayoutRow1: "",
    secondLayoutRow1Col1: "",
    secondLayoutRow1Col2: "",
    secondLayoutRow1Col3: "",
    secondLayoutRow1Col4: "",
    secondLayoutRow2: "",
    secondLayoutRow2Col1: "",
    secondLayoutRow2Col2: "",
    secondLayoutRow2Col3: "",
    secondLayoutRow2Col4: "",
    secondLayoutRow3: "",
    secondLayoutRow3Col1: "",
    secondLayoutRow3Col2: "",
    secondLayoutRow3Col3: "",
    secondLayoutRow3Col4: "",
    secondLayoutRow4: "",
    secondLayoutRow4Col1: "",
    secondLayoutRow4Col2: "",
    secondLayoutRow4Col3: "",
    secondLayoutRow4Col4: "",
    secondLayoutZoom: 1,
  });

  const propsForLayout = initialState.returnedLayout
    ? { ...initialState.returnedLayout }
    : initialState;

  const {
    name,
    categLayout,
    tipLayout,
    opening,

    layoutWidth,
    layoutHeight,

    hasText,
    editableText,
    editableBackground,

    coverHasImage,
    coverImageWidth,
    coverImageHeight,
    coverImageTopPosition,
    coverImageLeftPosition,

    paddingBetweenImages,
    borderWidth,
    dropShadow,

    rowsLayout,
    layoutPadding,
    row1,
    row1Col1,
    row1Col2,
    row1Col3,
    row1Col4,
    row2,
    row2Col1,
    row2Col2,
    row2Col3,
    row2Col4,
    row3,
    row3Col1,
    row3Col2,
    row3Col3,
    row3Col4,
    row4,
    row4Col1,
    row4Col2,
    row4Col3,
    row4Col4,
    zoom,

    secondLayoutCoverHasImage,
    secondLayoutCoverImageWidth,
    secondLayoutCoverImageHeight,
    secondLayoutCoverImageTopPosition,
    secondLayoutCoverImageLeftPosition,
    secondLayoutPaddingBetweenImages,
    secondLayoutBorderWidth,
    secondLayoutDropShadow,

    secondLayoutRowsLayout,
    secondLayoutLayoutPadding,
    secondLayoutRow1,
    secondLayoutRow1Col1,
    secondLayoutRow1Col2,
    secondLayoutRow1Col3,
    secondLayoutRow1Col4,
    secondLayoutRow2,
    secondLayoutRow2Col1,
    secondLayoutRow2Col2,
    secondLayoutRow2Col3,
    secondLayoutRow2Col4,
    secondLayoutRow3,
    secondLayoutRow3Col1,
    secondLayoutRow3Col2,
    secondLayoutRow3Col3,
    secondLayoutRow3Col4,
    secondLayoutRow4,
    secondLayoutRow4Col1,
    secondLayoutRow4Col2,
    secondLayoutRow4Col3,
    secondLayoutRow4Col4,
    secondLayoutZoom,
  } = propsForLayout;

  const handleTextUpdate = (event) => {
    setInitialState({
      ...initialState,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeDropdown = (value) => {
    setInitialState({
      ...initialState,
      [value.target.name]: value.target.value,
    });
  };

  const handleChangeCheck = (event) => {
    setInitialState({
      ...initialState,
      [event.target.name]: event.target.checked,
    });
  };

  const zoomOut = () => {
    setInitialState({
      ...initialState,
      zoom: zoom + 0.1,
    });
  };

  const zoomIn = () => {
    setInitialState({
      ...initialState,
      zoom: zoom - 0.1,
    });
  };

  const handleChangeSwitch = (event) => {
    setInitialState({ 
        ...initialState, 
        [event.target.name]: event.target.checked 
    });
  };

  // Dispatcher
  const [state, dispatch] = useReducer( layoutReducer, initialState);

  //////////////////////////////   AXIOS   ////////////////////////////////

  useEffect(() => {
    getLayouts();
    console.log(initialState)
  }, []);

  const createNewLayout = (newLayout) => {
    console.log("createNewLayout has starte");
    console.log(newLayout);
    axios
      .post("/layout", newLayout)
      .then((res) => dispatch({ type: CREATE_LAYOUT, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
  };

  const getLayouts =  async() => {
    console.log("getLayouts started")
    const respons = await axios
      .get("/layout")
      .then((res) => {
        //TODO this is a Fall back if  dispatch  does not update the layoutsList
        console.log("getLayouts in query")
        console.log(res.data)
        setInitialState({ ...initialState,  layoutsLists: res.data})
        dispatch({ type: GET_LAYOUTS, payload: res.data })})
      .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
  };

  const getLayoutsForId = (layoutId) => {
    if (layoutId === null) {
      return console.error("Missing layout id");
    }
    axios
      .get(`/layout/${layoutId}`)
      .then((res) => dispatch({ type: GET_LAYOUT_BY_ID, payload: res.data }))
      .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
  };

  const deleteLayoutsForId = (layoutId) => {
    console.log("deleteLayoutsForId started");
    console.log("layoutId : " + layoutId);
    axios
      .delete(`/layout/${layoutId}`)
      .then((res) => {
        dispatch({ type: DELETE_LAYOUT_BY_ID, payload: res.data });
        getLayouts();
      })
      .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
  };

  const duplicateLayoutsForId = (layoutId) => {
    axios
      .get(`/layout/${layoutId}/duplicate`)
      .then((res) =>
        dispatch({ type: DUPLICATE_LAYOUT_BY_ID, payload: res.data })
      )
      .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
  };

  const updateLayoutBackground = (image, layoutId) => {
    console.log("updateLayoutBackground started");
    console.log(image + " : " + layoutId);

    const fd = new FormData();
    fd.append("image", image, image.name);
    axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

    axios
      .put(`/layout/${layoutId}`, fd)
      .then((res) => {
        dispatch({
          type: MSG_LAYOUT,
          payload:
            "Background-ul layout-ului a fost actualizat, va rugam faceti refresh.",
        });
        getLayouts();
        console.log("updateLayoutBackground was successfull");
      })
      .catch((err) => {
        dispatch({ type: MSG_LAYOUT, payload: err });
        console.log("updateLayoutBackground was unsuccessfull");
      });
  };

  const contextLayoutsList = [...initialState.layoutsList];
  const contextReturnedLayout = {...initialState.returnedLayout};
  const contextMsgLayout = initialState.msgLayout;

  return (
    <LayoutContext.Provider
      value={{
        contextLayoutsList,
        contextReturnedLayout,
        contextMsgLayout,
        propsForLayout,

        handleTextUpdate,
        handleChangeDropdown,
        handleChangeCheck,
        zoomOut,
        zoomIn,
        handleChangeSwitch,

        createNewLayout,
        getLayoutsForId,
        deleteLayoutsForId,
        duplicateLayoutsForId,
        updateLayoutBackground,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutState;
