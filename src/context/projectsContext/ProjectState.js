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
    UPDATE_PROJECT,
    MSG_PROJECTS,
} from '../types'

const ProjectState = props => {


    const projectInitalState = {
        projectsList: null,
        returnedProject: null,
        msgProjects: null
    }

    const [state, dispatch] = useReducer(projectReducer, projectInitalState);

    const { projectsList, returnedProject, msgProjects } = state;

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        axios
            .get("/project")
            .then((res) => dispatch({ type: GET_PROJECTS, payload: res.data }))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const createNewProject = (newProject) => {
        console.log("createNewProject started")
        let projectId;
        axios
            .post("/project", newProject)
            .then((resProject) => {
                projectId = resProject.data.id;
                dispatch({ type: CREATE_PROJECT, payload: resProject.data })
                console.log(resProject)
                axios.post("/product", { id: resProject.data.id, name: resProject.data.name })
                    .then(resProduct => {
                        console.log(resProduct.data)
                        axios.put(`/project/${projectId}/update`, { productHandler: resProduct.data })
                    })
            })
            .then((resProduct) => {
                console.log(resProduct)
            })
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }))
    }

    const addImageToProject = async (picture, id) => {
        console.log("addImageToProject started")
        const fd = new FormData();
        fd.append('image', picture, picture.name);
        console.log(id)
        const url = `/project/${id}/image`
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';


        axios.post(url, fd)
            .then((res) => {
                (dispatch({ type: ADD_IMAGE_TO_PROJECT, payload: res.data }))
                //getProjects();
                console.log("addImageToProject finished succesfully")
            })
            .catch((err) => {
                dispatch({ type: MSG_PROJECTS, payload: err })
                console.log("addImageToProject finished unsuccesfully")
            });
    }

    const getProjectForId = (projectId) => {
        if (projectId === null) { return console.error("Missing layout id") }
        axios
            .get(`/project/${projectId}`)
            .then((res) => (dispatch({ type: GET_PROJECT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const deleteProjectForId = (projectId) => {
        console.log("deleteProjectForId started")
        //console.log(projectId)
        axios
            .delete(`/project/${projectId}`)
            .then((res) => {
                (dispatch({ type: DELETE_PROJECT_BY_ID, payload: res.data }))
                axios
                    .get(`/deleteProductByProjectId/${projectId}`)
            })
            .then((res) => (console.log("Success")))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const duplicateProjectForId = (projectId) => {
        axios
            .post(`/project/${projectId}/duplicate`)
            .then((res) => (dispatch({ type: DUPLICATE_PROJECT_BY_ID, payload: res.data })))
            .catch((err) => dispatch({ type: MSG_PROJECTS, payload: err }));
    };

    const updateProject = (projectId, projectProperties, productHandlerId) => {
        console.log("updateProject started")
        console.log(projectId)
        console.log(projectProperties)
        axios
            .put(`/project/${projectId}/update`, projectProperties)
            .then((res) => {
                console.log("updateProject was successfull")
                console.log(projectProperties)
                dispatch({ type: UPDATE_PROJECT, payload: res.data });

                // Update product name accordingly to project
                if (projectProperties.name !== "") {
                    axios.get(`/products/${productHandlerId}/updateNameOnProjectUpdate/${projectProperties.name}`)
                        .then(dateTimeOfUpdate => console.log("ProjectState.js : 126 : updateProject() : Update product succesfull"))
                        .catch((err) => {
                            dispatch({ type: MSG_PROJECTS, payload: err })
                            console.log("ProjectState.js : 130 : updateProject() : Update product unsuccesfull")
                        })
                }
            })
            .catch((err) => {
                dispatch({ type: MSG_PROJECTS, payload: err })
                console.log("ProjectState.js : 130 : updateProject() : Update project unsuccesfull")
                console.log(err)
            });
    };




    return (
        <ProjectContext.Provider
            value={{
                projectsList,
                returnedProject,
                msgProjects,

                updateProject,
                createNewProject,
                addImageToProject,
                getProjectForId,
                deleteProjectForId,
                duplicateProjectForId,

            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState