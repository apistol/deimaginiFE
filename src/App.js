import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Navigation from "./components/Navigation";
import CardMenu from "./components/CardMenu";

import NewProject from "./components/NewProject";
import NewTheme from "./components/NewTheme";
import NewLayout from "./components/NewLayout";
import NewProduct from "./components/NewProduct";
import ThemeCreator from "./components/ThemeCreator";
import ProjectSelector from "./components/ProjectSelector";

// axios.defaults.baseURL = "https://us-central1-editor-c70eb.cloudfunctions.net/api"
axios.defaults.baseURL = "http://localhost:5000/editor-c70eb/us-central1/api"

class App extends Component {
  state = {
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
  };


  componentDidMount() {
    this.getProjects();
    this.getLayouts();
    this.getThemes();
  }



  //////////////////////  PROJECTS  ////////////////////////////

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
      <Router>

        <div className="App">
          <Navigation />

          <CardMenu />

          <Switch>




            <Route exact path="/">
              <NewProject
                handleCreateNewProject={this.handleCreateNewProject} />
              <ProjectSelector
                projects={this.state.projects} />
            </Route>


            {console.log("this.state.layouts " + this.state.layouts)}


            <Route exact path="/creeazaLayout">
              <NewLayout
                handleCreateNewLayout={this.handleCreateNewLayout}
                getLayoutsForId={this.getLayoutsForId}
                deleteLayoutsForId={this.deleteLayoutsForId}
                getLayouts={this.getLayouts}
                duplicateLayoutsForId={this.duplicateLayoutsForId}
                returnedLayout={this.state.returnedLayout}
                layouts={this.state.layouts} />
            </Route>





            <Route exact path="/creeazaTematica">
              <NewTheme
                getLayouts={this.getLayouts}
                getThemes={this.getThemes}
                getLayoutsForId={this.getLayoutsForId}
                getThemesForId={this.getThemesForId}
                deleteLayoutsForId={this.deleteLayoutsForId}
                deleteThemeForId={this.deleteThemeForId}
                duplicateLayoutsForId={this.duplicateLayoutsForId}
                postImageForTheme={this.postImageForTheme}
                postCoverImageForTheme={this.postCoverImageForTheme}
                handleCreateNewTheme={this.handleCreateNewTheme}
                themeImage={this.state.themeImage}
                coverThemeImage={this.state.coverThemeImage}
                layouts={this.state.layouts}
                themes={this.state.themes}
                returnedLayout={this.state.returnedLayout}
                returnedTheme={this.state.returnedTheme} />

            </Route>

            <Route exact path="/creeazaProdusComplet">
              <Container
                direction="column"
                justify="flex-start"
                style={{
                  marginBottom: "60px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <NewProduct />
                  </Grid>
                  <Grid item xs={8}>
                    <ThemeCreator />
                  </Grid>
                </Grid>
              </Container>
            </Route>

          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
