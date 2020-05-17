import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import ImageUploader from 'react-images-upload';
import Switch from "@material-ui/core/Switch";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DropDown from "./lowLeveComponents/DropDown";

class NewLayout extends React.Component {
  state = {
    name: "",
    tipLayout: "",
    categLayout: "",
    layoutWith: "",
    layoutHeight: "",
    rowsLayout: "",
    colsLayout: "",
    coverHasImage: false,
    coverImageWidth: "",
    coverImageHeight: "",
    editableText: false,
    editableBackground: false,

  };

  componentDidMount() {

  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event });
  };
  handleChangeDropdown = (event) => {
    this.setState({ tipLayout: event });
  };

  render() {
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
            this.props.handleCreateNewProject(this.state);
          }}
        >
          {this.props.name !== "" ? "Creeaza" : "Update"}
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#e14013", color: "#FFF" }}
          onClick={() => {
            this.props.updateProject();
          }}
        >
          Salveaza
        </Button>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              label="Denumeste layoutul"
              type="text"
              onChange={this.handleTextUpdate}
              name="name"
              value={this.state.name}
            />
            <br />
            <DropDown
              options={["CopertaC1C4", "CopertaC2", "CopertaC3", "Pagina"]}
              value={this.state.tipHartie}
              label="Tip layout"
              name="tipLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />

            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedHasCover}
                      onChange={this.handleChangeHasCover}
                      name="checkedHasCover"
                      color="primary"
                    />
                  }
                  label="Are imagine de coperta"
                />
              </FormGroup>
            </FormControl>

            <TextField
              id="standard-basic"
              label="Latime img de coperta"
              type="text"
              onChange={this.handleTextUpdate}
              name="coverImageWidth"
              value={this.state.coverImageWidth}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Inaltime img de coperta"
              type="text"
              onChange={this.layoutHeight}
              name="coverImageHeight"
              value={this.state.coverImageHeight}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Pozitie top imagine"
              type="text"
              onChange={this.handleTextUpdate}
              name="coverImageTopPosition"
              value={this.state.coverImageTopPosition}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Pozitie stanga imagine"
              type="text"
              onChange={this.layoutHeight}
              name="coverImageLeftPosition"
              value={this.state.coverImageLeftPosition}
            />
          </Grid>
          <Grid item xs={4}>
            <DropDown
              options={["Clasic", "Horizon", "Panoramic clasic", "Panoramic horizon"]}
              value={this.state.tipHartie}
              label="Categorie layout"
              name="categLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />
            <TextField
              id="standard-basic"
              label="Latime layout"
              type="text"
              onChange={this.handleTextUpdate}
              name="layoutWith"
              value={this.state.layoutWith}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Inaltime layout"
              type="text"
              onChange={this.layoutHeight}
              name="name"
              value={this.state.layoutHeight}
            />
            <br />
            <DropDown
              options={["1", "2", "3", "4"]}
              value={this.state.rowsLayout}
              label="Randuri layout"
              name="rowsLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />
            <DropDown
              options={["1", "2", "3", "4"]}
              value={this.state.colLayout}
              label="Coloane layout"
              name="colLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />
          </Grid>
          <Grid item xs={4}>
            Lista de layouturi scrollable
          </Grid>
        </Grid>
      </Container >
    );
  }
}

export default NewLayout;
