import React, { useReducer, useEffect, useState } from 'react'
import LayoutContext from "./layoutContext"
import layoutReducer from "./layoutReducer"
import axios from "axios"

import {
    GET_LAYOUTS,
    CREATE_LAYOUT,
    GET_LAYOUT_BY_ID,
    DELETE_LAYOUT_BY_ID,
    DUPLICATE_LAYOUT_BY_ID,
    MSG_LAYOUT,
} from '../types'

const LayoutState = props => {

    const intialState = {
        layoutsList: [],
        returnedLayout: null,
        msgLayout: ""
    }

    const [state, dispatch] = useReducer(layoutReducer, intialState)

    const { layoutsList, returnedLayout, msgLayout, currentLayout } = state;

    useEffect(() => {
        getLayouts();
    }, [])

    const createNewLayout = (newLayout) => {
        console.log('createNewLayout has starte')
        console.log(newLayout)
        axios
            .post("/layout", newLayout)
            .then((res) => (dispatch({ type: CREATE_LAYOUT, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
    };

    const getLayouts = () => {
        axios
            .get("/layout")
            .then((res) => (dispatch({ type: GET_LAYOUTS, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
    };

    const getLayoutsForId = (layoutId) => {
        if (layoutId === null) { return console.error("Missing layout id") }
        axios
            .get(`/layout/${layoutId}`)
            .then((res) => (dispatch({ type: GET_LAYOUT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
    };

    const deleteLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/delete`)
            .then((res) => (dispatch({ type: DELETE_LAYOUT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));

    };

    const duplicateLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/duplicate`)
            .then((res) => (dispatch({ type: DUPLICATE_LAYOUT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_LAYOUT, payload: err }));
    };

    const updateLayoutBackground = (image, layoutId) => {
        console.log("updateLayoutBackground started")
        console.log(image + " : " + layoutId)

        const fd = new FormData();
        fd.append('image', image, image.name);
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

        axios
            .put(`/layout/${layoutId}`, fd)
            .then((res) => {
                dispatch({ type: MSG_LAYOUT, payload: "Background-ul layout-ului a fost actualizat, va rugam faceti refresh." });
                console.log("updateLayoutBackground was successfull")
            })
            .catch((err) => {
                dispatch({ type: MSG_LAYOUT, payload: err })
                console.log("updateLayoutBackground was unsuccessfull")
            });
    };



    return (
        <LayoutContext.Provider
            value={{
                layoutsList,
                returnedLayout,
                msgLayout,

                createNewLayout,
                getLayoutsForId,
                deleteLayoutsForId,
                duplicateLayoutsForId,
                updateLayoutBackground,
            }}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutState