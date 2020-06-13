import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GeneralFields from "../layoutComponents/GeneralFields";
import ViewerComponent from "../layoutComponents/ViewerComponent";
import LayoutState from "../context/layoutsContext/LayoutState"



const NewLayout = (props) => {


  return (
    <LayoutState>
      <Container
        direction="column"
        style={{
          marginBottom: "60px",
        }}
      >

        <Grid container spacing={3}>


          <Grid item xs={9}>
            <GeneralFields />
          </Grid>


          <Grid item xs={3}>
            <ViewerComponent />
          </Grid>

        </Grid>



      </Container >
    </LayoutState>
  );
}

export default NewLayout;
