import {
    GET_PROJECTS,
    CREATE_PROJECT
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        default:
            return state
    }
}