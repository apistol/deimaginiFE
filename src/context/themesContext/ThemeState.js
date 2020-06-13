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
    CREATE_THEME_ERROR,
} from '../types'

const ThemeState = props => {


    const [themes, setThemes] = useState({
        themesList: [],
        returnedTheme: "",
        themeImage: "",
        coverThemeImage: "",
    })
    const { themesList, returnedTheme, themeImage, coverThemeImage } = themes;


    const [layoutslist, setLayoutslist] = useState({})
    const { layouts } = layoutslist;

    // For reducers
    const [state, dispatch] = useReducer(themeReducer, themes)

    // TO DO get returnedTheme by into a single state
    const [returnedThemePrinAltState, setReturnedThemePrinAltState] = useState({
        returnedThemePrinAltTp: "",
        returnedLayoutThemePrinAltTp: ""
    })
    const { returnedThemePrinAltTp, returnedLayoutThemePrinAltTp } = returnedThemePrinAltState;


    useEffect(() => {
        getThemes();
        getLayouts();
    }, [])




    const createNewTheme = async (theme) => {
        axios
            .post("/theme", theme)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));

        getThemes();

    }


    const postImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.post("/theme/image", fd)

            .then(res => {
                this.setState({ themeImage: res.data.imageUrl })
            })
            .catch((err) => console.log(err))
    };

    const postCoverImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.post("/theme/image", fd)

            .then(res => {
                this.setState({ coverThemeImage: res.data.imageUrl })
            })
            .catch((err) => console.log(err))
    };





    const getThemes = () => {
        axios
            .get("/theme")
            .then((res) => {
                setThemes({ themesList: res.data })
            })
            .catch((err) => console.log(err));
    };


    let layoutSpecs;
    const getThemesForId = (themeId) => {
        let layoutId;

        axios
            .get(`/theme/${themeId}`)
            .then((res) => {
                layoutId = res.data.layoutUsed;
                setReturnedThemePrinAltState({ ...returnedThemePrinAltState, returnedThemePrinAltTp: { ...res.data } })
                const layoutIdFromTheme = layouts.filter(l => l.id === layoutId)
                fetchLayoutsForId(layoutIdFromTheme[0].id)
            })
            .then(res => {
                console.log("Fetch de tema facut cu succes")
            })
            .catch((err) => console.log(err));
    };


    const fetchLayoutsForId = async (layoutId) => {
        if (layoutId === null) { return console.error("Missing layout id") }
        axios
            .get(`/layout/${layoutId}`)
            .then((res) => {
                setReturnedThemePrinAltState({ ...returnedThemePrinAltState, returnedLayoutThemePrinAltTp: { ...res.data } })
            })
            .catch((err) => console.log(err))
    };


    const deleteThemeForId = (themeId) => {
        axios
            .get(`/theme/${themeId}/delete`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        getThemes();
    };


    const getLayouts = () => {
        axios
            .get("/layout")
            .then((res) => {
                setLayoutslist({ ...layoutslist, layouts: res.data })
            })
            .catch((err) => console.log(err));
    };


    return (
        <ThemeContext.Provider
            value={{
                themesList,
                returnedTheme,
                layouts,
                returnedThemePrinAltTp,
                returnedLayoutThemePrinAltTp,
                createNewTheme,
                postImageForTheme,
                postCoverImageForTheme,
                getThemesForId,
                deleteThemeForId,
                getLayouts,
            }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState