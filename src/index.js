import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LayoutState from "./context/layoutsContext/LayoutState";
import ProjectState from "./context/projectsContext/ProjectState"
import ThemeState from "./context/themesContext/ThemeState"


ReactDOM.render(
  <ProjectState>
    <ThemeState>
      <LayoutState>
        <App />
      </LayoutState>
    </ThemeState>
  </ProjectState>
  ,
  document.getElementById('root')
);
