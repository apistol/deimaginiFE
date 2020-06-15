import React, { useReducer, useEffect, useState } from 'react'
import ProjectContext from "./projectContext"
import projectReducer from "./projectReducer"
import axios from "axios"

import {
    GET_PROJECTS,
    CREATE_PROJECT,
    ADD_IMAGE_TO_PROJECT,
    GET_PROJECT_BY_ID,
    DELETE_PROJECT_BY_ID,
    DUPLICATE_PROJECT_BY_ID,
    MSG_PROJECTS,
} from '../types'

const ProjectState = props => {


    const projectInitalState = {
        projectsList: [],
        returnedProject: null,
        msgProjects: ""
    }

    const [state, dispatch] = useReducer(projectReducer, projectInitalState);

    const { projectsList, returnedProject, msgProjects } = state;


    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        axios
            .get("/project")
            .then((res) => (dispatch({ type: GET_PROJECTS, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };


    const createNewProject = (newProject) => {
        axios
            .post("/project", newProject)
            .then((res) => (dispatch({ type: CREATE_PROJECT, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    }

    const addImageToProject = async (picture, id) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);
        const url = `/project/${id}/image`
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';


        axios.post(url, fd)
            .then((res) => (dispatch({ type: ADD_IMAGE_TO_PROJECT, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    }

    const getProjectForId = (projectId) => {
        if (projectId === null) { return console.error("Missing layout id") }
        axios
            .get(`/project/${projectId}`)
            .then((res) => (dispatch({ type: GET_PROJECT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const deleteProjectForId = (projectId) => {
        axios
            .get(`/project/${projectId}/delete`)
            .then((res) => (dispatch({ type: DELETE_PROJECT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const duplicateProjectForId = (projectId) => {
        axios
            .get(`/project/${projectId}/duplicate`)
            .then((res) => (dispatch({ type: DUPLICATE_PROJECT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };


    return (
        <ProjectContext.Provider
            value={{
                projectsList,
                returnedProject,
                msgProjects,

                createNewProject,
                addImageToProject,
                getProjectForId,
                deleteProjectForId,
                duplicateProjectForId
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState