import {
    GET_LAYOUTS,
    CREATE_LAYOUT,
    GET_LAYOUT_BY_ID,
    DELETE_LAYOUT_BY_ID,
    DUPLICATE_LAYOUT_BY_ID
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_LAYOUTS:
            return {
                ...state,
                layouts: [...state.layouts, action.payload]
            }
        default:
            return state
    }
}