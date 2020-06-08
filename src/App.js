import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Navigation from "./components/Navigation";
import CardMenu from "./components/CardMenu";

import NewProject from "./components/NewProject";
import NewTheme from "./components/NewTheme";
import NewLayout from "./components/NewLayout";
import NewProduct from "./components/NewProduct";
import ProjectSelector from "./components/ProjectSelector";
import Fetcher from "./Fetcher";

axios.defaults.baseURL = "https://us-central1-editor-c70eb.cloudfunctions.net/api"
//axios.defaults.baseURL = "http://localhost:5000/editor-c70eb/us-central1/api"

class App extends Component {



  render() {
    return (
      <Router>

        <div className="App">
          <Navigation />

          <CardMenu />

          <Switch>




            <Route exact path="/">

              <Fetcher>
                {(projects,
                  handleCreateNewProject,
                  getProjects,
                  postProject,
                  postProjectSpecs,
                  addImageToProject) => {
                  return <Fragment>
                    <NewProject
                      handleCreateNewProject={handleCreateNewProject} />
                    <ProjectSelector
                      projects={projects} />
                  </Fragment>
                }}
              </Fetcher>




            </Route>

            <Route exact path="/creeazaLayout">

              <Fetcher>
                {(handleCreateNewLayout,
                  getLayoutsForId,
                  deleteLayoutsForId,
                  duplicateLayoutsForId,
                  getLayouts,
                  returnedLayout,
                  layouts
                ) => {
                  return <NewLayout
                    layoutList={layouts}
                    handleCreateNewLayout={handleCreateNewLayout}
                    getLayoutsForId={getLayoutsForId}
                    deleteLayoutsForId={deleteLayoutsForId}
                    getLayouts={getLayouts}
                    duplicateLayoutsForId={duplicateLayoutsForId}
                    returnedLayout={returnedLayout}
                  />
                }}
              </Fetcher>

            </Route>





            <Route exact path="/creeazaTematica">

              <Fetcher>
                {(
                  getLayoutsForId,
                  deleteLayoutsForId,
                  duplicateLayoutsForId,
                  getLayouts,
                  returnedLayout,
                  layouts,
                  getThemes,
                  getThemesForId,
                  postImageForTheme,
                  postCoverImageForTheme,
                  handleCreateNewTheme,
                  themeImage,
                  coverThemeImage,
                  themes,
                  returnedTheme,
                ) => {
                  return <NewTheme
                    getLayouts={getLayouts}
                    getLayoutsForId={getLayoutsForId}
                    deleteLayoutsForId={deleteLayoutsForId}
                    duplicateLayoutsForId={duplicateLayoutsForId}
                    layouts={layouts}
                    returnedLayout={returnedLayout}

                    getThemes={getThemes}
                    getThemesForId={getThemesForId}
                    postImageForTheme={postImageForTheme}
                    postCoverImageForTheme={postCoverImageForTheme}
                    handleCreateNewTheme={handleCreateNewTheme}
                    themeImage={themeImage}
                    coverThemeImage={coverThemeImage}
                    themes={themes}
                    returnedTheme={returnedTheme}
                  />


                }}
              </Fetcher>
            </Route>

            <Route exact path="/creeazaProdusComplet">

              <Fetcher>
                {(
                  projects,
                  layouts,
                  themes,
                  getLayoutsForId,
                  getThemesForId,

                ) => {
                  return <NewProduct
                    projects={projects}
                    layouts={layouts}
                    themes={themes}
                    getLayoutsForId={getLayoutsForId}
                    getThemesForId={getThemesForId}
                  />


                }}
              </Fetcher>



            </Route>

          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
