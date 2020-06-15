import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import ImageUploader from 'react-images-upload';
import Switch from "@material-ui/core/Switch";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import DropDownLayouts from "./lowLeveComponents/DropDownLayouts";
import RenderedPage from "./RenderedPage";
import RenderedCover from "./RenderedCover";
import Draggable from 'react-draggable';

import ViwerComponent from '../themeComponents/ThemeViewerComponent';
import ThemeState from "../context/themesContext/ThemeState"
import ThemeContext from "../context/themesContext/themeContext"

import GeneralThemeFields from "../themeComponents/GeneralThemeFields"

const NewTheme = props => {


  return (
    <ThemeState>
      <Container
        direction="row"
        justify="flex-start"
        style={{
          marginBottom: "60px",
        }}
      >

        <Grid container spacing={3}>

          <Grid item xs={9}>
            <GeneralThemeFields />
          </Grid>
          <Grid item xs={3}>

            <ViwerComponent />

          </Grid>
        </Grid >
      </Container >
    </ThemeState>
  );
}

export default NewTheme;
