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
    CREATE_LAYOUT_ERROR,
} from '../types'

const LayoutState = props => {

    const [layouts, setLayouts] = useState({
        layoutsList: [],
        returnedLayout: null,
    })

    const [state, dispatch] = useReducer(layoutReducer, layouts)

    useEffect(() => {
        getLayouts();
    }, [])

    const createNewLayout = (newLayout) => {
        postLayout(newLayout);
        getLayouts();
    };

    const getLayouts = () => {
        axios
            .get("/layout")
            .then((res) => {
                setLayouts({ ...layouts, layoutsList: res.data })
            })
            .catch((err) => console.log(err));
    };

    const postLayout = async (newLayout) => {
        axios
            .post("/layout", newLayout)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    const getLayoutsForId = (layoutId) => {
        if (layoutId === null) { return console.error("Missing layout id") }
        axios
            .get(`/layout/${layoutId}`)
            .then((res) => {
                setLayouts({ ...layouts, returnedLayout: res.data })
            })
            .catch((err) => console.log(err));
    };

    const deleteLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/delete`)
            .then((res) => {
                console.log(res);
                getLayouts();
            })
            .catch((err) => console.log(err));

    };

    const duplicateLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/duplicate`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        getLayouts();
    };



    const { layoutsList, returnedLayout } = layouts;

    return (
        <LayoutContext.Provider
            value={{
                layoutsList,
                returnedLayout,
                createNewLayout,
                getLayoutsForId,
                deleteLayoutsForId,
                duplicateLayoutsForId
            }}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutState