import React, { Component } from 'react'
import axios from "axios";

export default class Fetcher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            layouts: [],
            themes: [],

            returnedLayout: null,
            returnedTheme: null,
            returnedProject: null,

            newProject: "",
            newLayout: "",

            themeImage: "",
            coverThemeImage: "",
        }
    }

    componentDidMount() {
        this.getProjects();
        this.getLayouts();
        this.getThemes();
    }


    //////////////////////  PROJECTS  ////////////////////////////

    handleCreateNewProject = (newProject) => {
        this.setState({
            ...this.state,
            newProject
        });
        this.postProject(newProject);
        this.getProjects();
    };


    getProjects = () => {
        axios
            .get("/project")
            .then((res) => {
                this.setState({
                    projects: res.data,
                });
            })
            .catch((err) => console.log(err));
    };


    postProject = async (newProject) => {
        const newPrj = this.postProjectSpecs(newProject);
        await newPrj;
        const imgToPrj = this.addImageToProject(newProject.picture)
        await imgToPrj;
        this.getProjects();
    };


    postProjectSpecs = async (newProject) => {
        await axios
            .post("/project", newProject)
            .then((res) => {
                this.setState({ returnedProject: res.data });
            })
            .catch((err) => console.log(err));
    }

    addImageToProject = async (picture) => {
        if (this.state.returnedProject.id !== "") {
            const fd = new FormData();
            fd.append('image', picture, picture.name);
            const url = `/project/${this.state.returnedProject.id}/image`

            axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
            axios.post(url, fd)

                .then(res => {
                    console.log("Upload succes for image")
                })
                .catch((err) => console.log(err))
        }
    }







    //////////////////////  LAYOUTS  ////////////////////////////


    handleCreateNewLayout = (newLayout) => {
        this.setState({
            ...this.state,
            newLayout
        });
        this.postLayout(newLayout);
        this.getLayouts();
    };



    getLayouts = () => {
        axios
            .get("/layout")
            .then((res) => {
                this.setState({
                    layouts: res.data,
                });
            })
            .catch((err) => console.log(err));
    };




    postLayout = async (newLayout) => {
        axios
            .post("/layout", newLayout)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));

        this.getLayouts();
    };


    getLayoutsForId = (layoutId) => {
        console.log("Am ajuns aici")
        if (layoutId === null) { return console.error("Missing layout id") }
        axios
            .get(`/layout/${layoutId}`)
            .then((res) => {
                this.setState({ returnedLayout: res.data })
            })
            .catch((err) => console.log(err));
        this.getLayouts();
    };



    deleteLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/delete`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        this.getLayouts();
    };


    duplicateLayoutsForId = (layoutId) => {
        axios
            .get(`/layout/${layoutId}/duplicate`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        this.getLayouts();
    };





    //////////////////////  THEMES  ////////////////////////////

    postImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.post("/theme/image", fd)

            .then(res => {
                this.setState({ themeImage: res.data.imageUrl })
            })
            .catch((err) => console.log(err))
    };

    postCoverImageForTheme = async (picture) => {
        const fd = new FormData();
        fd.append('image', picture, picture.name);

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.post("/theme/image", fd)

            .then(res => {
                this.setState({ coverThemeImage: res.data.imageUrl })
            })
            .catch((err) => console.log(err))
    };



    handleCreateNewTheme = async (theme) => {
        theme.themeImage = this.state.themeImage;
        theme.coverThemeImage = this.state.coverThemeImage;
        axios
            .post("/theme", theme)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err));

        this.getThemes();

    }

    getThemes = () => {
        axios
            .get("/theme")
            .then((res) => {
                this.setState({
                    themes: res.data,
                });
            })
            .catch((err) => console.log(err));
    };


    getThemesForId = async (themeId) => {
        let layoutId;
        await axios
            .get(`/theme/${themeId}`)
            .then((res) => {
                layoutId = res.data.layoutUsed;
                this.setState(
                    {
                        returnedTheme: { ...res.data }
                    }
                )
            })
            .catch((err) => console.log(err));
        this.getLayoutsForId(layoutId);
    };

    deleteThemeForId = (themeId) => {
        axios
            .get(`/theme/${themeId}/delete`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
        this.getThemes();
    };






    render() {
        return (

            this.props.children(
                this.state.projects,
                this.state.layouts,
                this.state.themes,

                this.state.returnedLayout,
                this.state.returnedTheme,
                this.state.returnedProject,

                this.state.themeImage,
                this.state.coverThemeImage,

                this.handleCreateNewProject,
                this.getProjects,
                this.postProject,
                this.postProjectSpecs,
                this.addImageToProject,

                this.handleCreateNewLayout,
                this.getLayoutsForId,
                this.deleteLayoutsForId,
                this.getLayouts,
                this.duplicateLayoutsForId,

                this.getThemes,
                this.getThemesForId,
                this.postImageForTheme,
                this.postCoverImageForTheme,
                this.handleCreateNewTheme,

            )
        )
    }
}
