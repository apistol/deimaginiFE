import {
    GET_PROJECTS,
    CREATE_PROJECT,
    ADD_IMAGE_TO_PROJECT,
    GET_PROJECT_BY_ID,
    DELETE_PROJECT_BY_ID,
    DUPLICATE_PROJECT_BY_ID,
    UPDATE_PROJECT,
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
                projectsList: [...state.projectsList, action.payload],
                msgProjects: { type: "success", message: "Proiect creeat cu succes, va rugam faceti refresh paginii." },
            }
        case ADD_IMAGE_TO_PROJECT:
            return {
                ...state,
                msgProjects: { type: "success", message: "Imagine adaugata cu succes, va rugam faceti refresh paginii." },
            }
        case GET_PROJECT_BY_ID:
            return {
                ...state,
                returnedProject: { ...action.payload }
            }
        case DELETE_PROJECT_BY_ID:
            return {
                ...state,
                msgProjects: { type: "success", message: "Proiect sters cu succes, va rugam faceti refresh paginii." },
            }
        case DUPLICATE_PROJECT_BY_ID:
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload]
            }
        case UPDATE_PROJECT:
            return {
                ...state,
                msgProjects: { type: "success", message: "Proiectul a fost actualizats cu succes, va rugam faceti refresh paginii." },
            }
        case MSG_PROJECTS:
            return {
                ...state,
                msgProjects: { type: "success", message: "" },
            }
        default:
            return state
    }
}