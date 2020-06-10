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


    const [themes, setThemes] = useState({})

    useEffect(() => {
        getThemes();
        getLayouts();
    })


    const [state, dispatch] = useReducer(themeReducer, themes)

    // metode 



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


    const getThemesForId = async (themeId) => {
        let layoutId;
        await axios
            .get(`/theme/${themeId}`)
            .then((res) => {
                layoutId = res.data.layoutUsed;
                setThemes({ returnedTheme: res.data })
            })
            .catch((err) => console.log(err));
        //getLayoutsForId(layoutId);
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
                setThemes({ ...themes, layouts: res.data })
            })
            .catch((err) => console.log(err));
    };

    const { themesList, returnedTheme, layouts } = themes;


    return (
        <ThemeContext.Provider
            value={{
                themesList,
                returnedTheme,
                layouts,
                createNewTheme,
                postImageForTheme,
                postCoverImageForTheme,
                getThemes,
                getThemesForId,
                deleteThemeForId,
                getLayouts,
            }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState