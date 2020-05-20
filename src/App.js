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

class App extends Component {
  state = {
    models: [],
    selectedModel: "",
    newProject: "",
    returnedProject: "",
    newLayout: "",
    layouts: []
  };


  componentDidMount() {
    this.getProjects();
    this.getLayouts();
  }

  //////////////////////  GET  ////////////////////////////

  getProjects = () => {
    axios
      .get("/project")
      .then((res) => {
        this.setState({
          models: res.data,
        });
      })
      .catch((err) => console.log(err));
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







  //////////////////////  POST  ////////////////////////////

  postProject = async (newProject) => {
    axios
      .post("/project", newProject)
      .then((res) => {
        this.setState({ returnedProject: res.data }, this.addImageToProject, this.state.returnedProject, this.state.newProject);
      })
      .catch((err) => console.log(err));

    newProject.picture !== null && this.addImageToProject()
    this.getProjects();
  };
  addImageToProject = () => {
    if (this.state.returnedProject.id !== "") {
      const fd = new FormData();
      fd.append('image', this.state.newProject.picture, this.state.newProject.picture.name);
      const url = `/project/${this.state.returnedProject.id}/image`
      axios.post(url, fd)
        .then(res => {
          console.log("Upload succes for image")
        })
        .catch((err) => console.log(err))
    }
  }


  postLayout = async (newLayout) => {
    axios
      .post("/layout", newLayout)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err));

    this.getLayouts();
  };


  //////////////////////  HANDLERS  ////////////////////////////

  handleCreateNewProject = (newProject) => {
    this.setState({
      ...this.state,
      newProject
    });
  };
  handleCreateNewLayout = (newLayout) => {
    this.setState({
      ...this.state,
      newLayout
    });
  };



  updateProject = () => {
    this.postProject(this.state.newProject);
    this.getProjects();
  };
  updateLayout = () => {
    this.postLayout(this.state.newLayout);
    this.getLayouts();
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
                handleCreateNewProject={this.handleCreateNewProject}
                updateProject={this.updateProject} />
              <ProjectSelector
                models={this.state.models} />
            </Route>





            <Route exact path="/creeazaLayout">
              <NewLayout
                handleCreateNewLayout={this.handleCreateNewLayout}
                updateLayout={this.updateLayout}
                layouts={this.state.layouts} />
            </Route>





            <Route exact path="/creeazaTematica">
              <NewTheme />

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
