import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
  };
  getModels = () => {
    axios
      .get("/model")
      .then((res) => {
        console.log(res.data);
        this.setState({
          models: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  postModel = (newProject) => {
    console.log(newProject);
    axios
      .post("/model", newProject)
      .then((res) => {
        this.setState({ newProject });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getModels();
  }
  productChecked = (checkedModelId) => {
    this.state.models.map((model) => {
      if (model.modelId === checkedModelId)
        this.setState({ selectedModel: model, stepperStep: 1 });
    });
  };
  modelChecked = (value) => {
    this.setState({
      stepperStep: 2,
    });
  };
  handleStepperIncrement = () => {
    this.setState((prevState) => {
      return { stepperProgress: prevState.stepperProgress + 1 };
    });
  };
  handleStepperDecrement = () => {
    this.setState((prevState) => {
      return { stepperProgress: prevState.stepperProgress - 1 };
    });
  };
  handleCreateNewProject = (newProject) => {
    this.setState({
      ...this.state,
      newProject,
      stepperStep: 1,
    });
  };
  updateProject = () => {
    this.postModel(this.state.newProject);
    this.getModels();
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
