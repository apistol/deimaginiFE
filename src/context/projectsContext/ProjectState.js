import React, { useReducer, useEffect, useState } from 'react'
import ProjectContext from "./projectContext"
import projectReducer from "./projectReducer"
import axios from "axios"

import {
    GET_PROJECTS,
    CREATE_PROJECT,
    GET_PROJECT_BY_ID,
    DELETE_PROJECT_BY_ID,
    DUPLICATE_PROJECT_BY_ID,
    CREATE_PROJECT_ERROR,
} from '../types'

const ProjectState = props => {


    const projectInitalState = {
        projectsList: [],
        returnedProject: null
    }

    const [state, dispatch] = useReducer(projectReducer, projectInitalState)

    useEffect(() => {
        getProjects();
    }, [])


    const createNewProject = (newProject) => {
        try {
            postProjectSpecs(newProject);
            dispatch({ type: CREATE_PROJECT, payload: newProject })
        } catch{
            dispatch({ type: CREATE_PROJECT_ERROR, payload: "Error in creating the project" })
        }
    };


    const getProjects = () => {
        axios
            .get("/project")
            .then((res) => {
                setProjects({ ...projects, projectsList: res.data });
            })
            .catch((err) => console.log(err));
    };



    const postProjectSpecs = async (newProject) => {
        await axios
            .post("/project", newProject)
            .then((res) => {
                setProjects({ ...projects, returnedProject: res.data });
            })
            .catch((err) => console.log(err));
    }

    const addImageToProject = async (picture, id) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);
        const url = `/project/${id}/image`

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.post(url, fd)

            .then(res => {
                console.log("Upload succes for image")
                getProjects();
            })
            .catch((err) => console.log(err))


    }

    const getProjectForId = (projectId) => {
        if (projectId === null) { return console.error("Missing layout id") }
        axios
            .get(`/project/${projectId}`)
            .then((res) => {
                setProjects({ ...projects, returnedProject: res.data })
            })
            .catch((err) => console.log(err));
    };

    const deleteProjectForId = (projectId) => {
        axios
            .get(`/project/${projectId}/delete`)
            .then((res) => {
                console.log(res + " deleted succesfully")
            })
            .catch((err) => console.log(err));
        getProjects();
    };

    const duplicateProjectForId = (projectId) => {
        axios
            .get(`/project/${projectId}/delete`)
            .then((res) => {
                console.log(res + " deleted succesfully")
            })
            .catch((err) => console.log(err));
        getProjects();
    };


    const { projectsList, returnedProject } = projects;
    return (
        <ProjectContext.Provider
            value={{
                projects,
                projectsList,
                returnedProject,
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