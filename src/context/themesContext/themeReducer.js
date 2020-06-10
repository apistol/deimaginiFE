import {
    GET_THEMES,
    CREATE_THEME,
    GET_THEME_BY_ID,
    DELETE_THEME_BY_ID,
    DUPLICATE_THEME_BY_ID,
    CREATE_THEME_ERROR,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_THEMES:
            return {
                ...state,
                themes: [...state.themes, action.payload]
            }
        default:
            return state
    }
}