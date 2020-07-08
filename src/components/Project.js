import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ProjectSelector from "./projectComponents/ProjectSelector";

import DropDown from "./lowLeveComponents/DropDown";
import ProjectsContext from "../context/projectsContext/projectContext"



class NewProject extends React.Component {

  static projectsContext = ProjectsContext;

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      pages: 0,
      checkedHasCover: false,
      coverWidth: "",
      coverHeight: "",
      pageWidth: "",
      pageHeight: "",
      tipHartie: "",
      pretRon: "",
      pretDolari: "",
      pretEuro: "",
      discount: "",
      tipProiect: "",
      picture: null,
      returnedProject: null
    }
  }




  handleTextUpdate = (event) => {
    if (event === null) return
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {

    const {
      id,
      name,
      pages,
      checkedHasCover,
      coverWidth,
      coverHeight,
      pageWidth,
      pageHeight,
      tipHartie,
      pretRon,
      pretDolari,
      pretEuro,
      discount,
      tipProiect,
      picture,
      returnedProject
    } = this.state;

    return (
      <Container
        direction="column"
        justify="flex-start"
        style={{
          marginBottom: "60px",
        }}
      >

        <Button
          variant="contained"
          style={{
            backgroundColor: "#e14013",
            color: "#FFF",
            marginRight: "8px",
          }}
          onClick={() => {
            this.context.createNewProject(this.state);
          }}
        >
          Creeaza
      </Button>



        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              label="Denumeste proiectul"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="name"
              value={name}
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              label="Numar pagini"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pages"
              value={pages}
            />

            <DropDown
              options={["Album", "Calendar", "Carte", "Cadou", "Wall art", "Decor"]}
              value={tipProiect}
              label="Tip proiect"
              name="tipProiect"
              handleChangeDropdown={(event) => this.handleTextUpdate(event)}
            />

            <br />
            <br />
          </Grid>
          <Grid item xs={4}>
            <br />
            <TextField
              id="standard-basic1"
              label="Latime coperta"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="coverWidth"
              value={coverWidth}
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Inaltime coperta"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="coverHeight"
              value={coverHeight}
            />
            <br />
            <TextField
              id="standard-basic3"
              label="Latime pagina"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pageWidth"
              value={pageWidth}
            />
            <br />
            <TextField
              id="standard-basic4"
              label="Inaltime pagina"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pageHeight"
              value={pageHeight}
            />
          </Grid>
          <Grid item xs={4}>
            <DropDown
              options={["hartie creponata", "hartie laminata", "carton"]}
              value={tipHartie}
              label="Tip hartie"
              name="tipHartie"
              handleChangeDropdown={(event) => this.handleTextUpdate(event)}
            />

            <TextField
              id="standard-basic5"
              label="Pret Ron"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pretRon"
              value={pretRon}
            />
            <br />
            <TextField
              id="standard-basic6"
              label="Pret Dolari"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pretDolari"
              value={pretDolari}
            />
            <br />
            <TextField
              id="standard-basic7"
              label="Pret Euro"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="pretEuro"
              value={pretEuro}
            />
            <br />
            <TextField
              id="standard-basic8"
              label="Discount"
              type="text"
              onChange={(event) => this.handleTextUpdate(event)}
              name="discount"
              value={discount}
            />
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
        <ProjectSelector />
      </Container>
    );
  }
}

NewProject.contextType = ProjectsContext;

export default NewProject;
