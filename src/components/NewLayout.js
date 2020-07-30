import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LayoutFields from "./layoutComponents/LayoutFields";
import LayoutState from "../context/layoutsContext/LayoutState";
import LayoutRenderer from "./layoutComponents/LayoutRenderer";
import ViewerComponent from "./layoutComponents/ViewerComponent";

const NewLayout = (props) => {
  return (
    <LayoutState>
      <Container
        direction="column"
        justify="flex-start"
        style={{
          marginBottom: "60px",
        }}
      >
        <Grid>
          <Grid item xs={12}>
            <LayoutFields />
          </Grid>
          <Grid item xs={12}>
            <LayoutRenderer />
          </Grid>
          <Grid item xs={12}>
            <ViewerComponent />
          </Grid>
        </Grid>
      </Container>
    </LayoutState>
  );
};

export default NewLayout;
