import React from "react";
import Grid from "@material-ui/core/Grid";

import ProjectsState from "../context/projectsContext/ProjectState";

import ProjectFields from "./projectComponents/ProjectFields";
import ProjectSelector from "./projectComponents/ProjectSelector";



const NewProject = () => {

  return (
    <ProjectsState>
                <Grid container>
                    <Grid item xs={12}>
                        <ProjectFields />
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectSelector />
                    </Grid>
                </Grid>
        </ProjectsState>
  );
}



export default NewProject;
