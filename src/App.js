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
import LayoutCreator from "./components/LayoutCreator";
import ThemeCreator from "./components/ThemeCreator";
import ProjectSelector from "./components/ProjectSelector";

class App extends Component {
  state = {
    models: [],
    selectedModel: "",
    newProject: "",
    returnedProject: ""
  };
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

  componentDidMount() {
    this.getProjects();
  }

  productChecked = (checkedModelId) => {
    this.state.models.map((model) => {
      if (model.modelId === checkedModelId)
        this.setState({ selectedModel: model });
    });
  };


  handleCreateNewProject = (newProject) => {
    this.setState({
      ...this.state,
      newProject
    });
  };
  updateProject = () => {
    this.postProject(this.state.newProject);
    this.getProjects();
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
                updateProject={this.updateProject}
                projectName={this.state.projectName}
                selectedModel={this.state.selectedModel} />
              <ProjectSelector
                stepperProgress={this.state.stepperProgress}
                productChecked={this.productChecked}
                selectedModel={this.state.selectedModel}
                models={this.state.models} />
            </Route>

            <Route exact path="/creeazaLayout">
              <NewLayout />
              <LayoutCreator
                selectedModel={this.state.selectedModel} />
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
