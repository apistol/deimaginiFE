import {
    GET_THEMES,
    CREATE_THEME,
    GET_THEME_BY_ID,
    DELETE_THEME_BY_ID,
    DUPLICATE_THEME_BY_ID,

    MSG_THEMES,

    GET_LAYOUTS,
    LAYOUT_ID_FOR_THEME,
    LAYOUT_FOR_THEME,

    ADD_COVER_BACKGROUND,
    ADD_IMAGE_COVER,
    ADD_SLIDE_FOR_PRODUCT,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_THEMES:
            return {
                ...state,
                themesList: [...action.payload]
            }
        case CREATE_THEME:
            return {
                ...state,
                themesList: [{ ...action.payload }, ...state.themesList]
            }
        case GET_THEME_BY_ID:
            return {
                ...state,
                returnedTheme: {
                    ...action.payload,
                    coverThemeImage: action.payload.coverThemeImage,
                    themeImage: action.payload.themeImage,
                },

            }
        case DELETE_THEME_BY_ID:
            return {
                ...state,
                themesList: [state.themesList.filter(t => t.id !== action.payload)]
            }
        case LAYOUT_ID_FOR_THEME:
            return {
                ...state,
                layoutIdForTheme: action.payload.layoutUsed,
                coverThemeImage: action.payload.coverThemeImage,
                themeImage: action.payload.themeImage,
            }
        case LAYOUT_FOR_THEME:
            return {
                ...state,
                layoutForTheme: {
                    ...state.layoutForTheme, ...action.payload,
                    coverThemeImage: action.payload.coverThemeImage,
                    themeImage: action.payload.themeImage,
                }
            }
        case ADD_SLIDE_FOR_PRODUCT:
            return {
                ...state,
                slider: action.payload
            }
        case DUPLICATE_THEME_BY_ID:
            return {
                ...state,
                themesList: [...action.payload]
            }
        case MSG_THEMES:
            return {
                ...state,
                msgThemes: { ...action.payload }
            }
        case ADD_COVER_BACKGROUND:
            return {
                ...state,
                themeImage: action.payload.imageUrl
            }
        case ADD_IMAGE_COVER:
            return {
                ...state,
                coverThemeImage: action.payload.imageUrl
            }
        case GET_LAYOUTS:
            return {
                ...state,
                layouts: [...action.payload]
            }

        default:
            return state
    }
}