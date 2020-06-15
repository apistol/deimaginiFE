import {
    GET_LAYOUTS,
    CREATE_LAYOUT,
    GET_LAYOUT_BY_ID,
    DELETE_LAYOUT_BY_ID,
    DUPLICATE_LAYOUT_BY_ID,
    MSG_LAYOUT,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_LAYOUTS:
            return {
                ...state,
                layoutsList: [...action.payload]
            }
        case CREATE_LAYOUT:
            return {
                ...state,
                layoutsList: [...state.layoutsList, action.payload]
            }
        case GET_LAYOUT_BY_ID:
            return {
                ...state,
                returnedLayout: { ...action.payload }
            }
        case DELETE_LAYOUT_BY_ID:
            return {
                ...state,
                layoutsList: [...state.layoutsList, action.payload]
            }
        case DUPLICATE_LAYOUT_BY_ID:
            return {
                ...state,
                layoutsList: [...state.layoutsList, action.payload]
            }
        case MSG_LAYOUT:
            return {
                ...state,
                msgLayout: { ...action.payload }
            }
        default:
            return state
    }
}