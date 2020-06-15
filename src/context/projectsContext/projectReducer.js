import {
    GET_PROJECTS,
    CREATE_PROJECT,
    ADD_IMAGE_TO_PROJECT,
    GET_PROJECT_BY_ID,
    DELETE_PROJECT_BY_ID,
    DUPLICATE_PROJECT_BY_ID,
    MSG_PROJECTS,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projectsList: [...action.payload]
            }
        case CREATE_PROJECT:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        case ADD_IMAGE_TO_PROJECT:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        case GET_PROJECT_BY_ID:
            return {
                ...state,
                returnedProject: { ...action.payload }
            }
        case DELETE_PROJECT_BY_ID:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        case DUPLICATE_PROJECT_BY_ID:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        case MSG_PROJECTS:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        default:
            return state
    }
}