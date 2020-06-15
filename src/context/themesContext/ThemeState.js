import React, { useReducer, useEffect, useState } from 'react'
import ThemeContext from "./themeContext"
import themeReducer from "./themeReducer"
import axios from "axios"

import {
    GET_THEMES,
    CREATE_THEME,
    GET_THEME_BY_ID,
    DELETE_THEME_BY_ID,
    DUPLICATE_THEME_BY_ID,

    GET_LAYOUTS,
    LAYOUT_ID_FOR_THEME,
    LAYOUT_FOR_THEME,

    MSG_THEMES,

    ADD_COVER_BACKGROUND,
    ADD_IMAGE_COVER,
} from '../types'

const ThemeState = props => {


    const initialState = {
        themesList: [],
        layouts: [],

        themeImage: "",
        coverThemeImage: "",

        layoutIdForTheme: null,
        layoutForTheme: null,

        msgThemes: "",
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)

    const {
        themesList,
        layouts,

        themeImage,
        coverThemeImage,

        layoutIdForTheme,
        layoutForTheme,

        msgThemes

    } = state;



    useEffect(() => {
        getThemes();
        getLayouts();
    }, [])


    const getThemes = () => {
        axios
            .get("/theme")
            .then((res) => (dispatch({ type: GET_THEMES, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };

    const createNewTheme = (theme) => {
        axios
            .post("/theme", theme)
            .then((res) => (dispatch({ type: CREATE_THEME, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    }

    const postBackgroundImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

        axios.post("/theme/image", fd)
            .then((res) => (dispatch({ type: ADD_IMAGE_COVER, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };


    const postImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

        axios.post("/theme/image", fd)
            .then((res) => (dispatch({ type: ADD_COVER_BACKGROUND, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }))
    };








    const getThemeForId = (themeId) => {
        let layoutId;

        axios
            .get(`/theme/${themeId}`)
            .then((res) => {
                dispatch({ type: LAYOUT_ID_FOR_THEME, payload: res.data })
                fetchLayoutsForId(res.data.layoutUsed)
            })
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };


    const fetchLayoutsForId = async (layoutId) => {
        if (layoutId === null) { return console.error("Missing layout id") }
        axios
            .get(`/layout/${layoutId}`)
            .then((res) => dispatch({ type: LAYOUT_FOR_THEME, payload: res.data }))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };


    const deleteThemeForId = (themeId) => {
        axios
            .get(`/theme/${themeId}/delete`)
            .then((res) => dispatch({ type: DELETE_THEME_BY_ID, payload: res.data }))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };


    const getLayouts = () => {
        axios
            .get("/layout")
            .then((res) => dispatch({ type: GET_LAYOUTS, payload: res.data }))
            .catch((err) => dispatch({ type: MSG_THEMES, payload: err }));
    };


    return (
        <ThemeContext.Provider
            value={{
                themesList,
                layoutForTheme,
                layouts,

                themeImage,
                coverThemeImage,

                fetchLayoutsForId,
                getThemeForId,
                createNewTheme,
                deleteThemeForId,

                postImageForTheme,
                postBackgroundImageForTheme,

            }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState