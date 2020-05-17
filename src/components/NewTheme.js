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

import DropDown from "./lowLeveComponents/DropDown";

class NewTheme extends React.Component {
  state = {
    name: "",
    photoOnC1: false,
    emptyWindowOnC1: true,
    layoutEditC1: false,
    layoutEditC2: false,
    layoutEditC3: false,
    layoutEditC4: false,
    textEditC1: false,
    textEditC2: false,
    textEditC3: false,
    textEditC4: false,
    backgroundEditC1C4: false,
    backgroundEditC2: false,
    backgroundEditC3: false,
    backgroundImageC1C4: "",
    backgroundImageC2: "",
    backgroundImageC3: "",
    layoutC1C4: "",
    layoutC2: "",
    layoutC3: ""
  };

  componentDidMount() {

  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event });
  };
  handleChangeDropdown = (event) => {
    this.setState({ layoutC1C4: event });
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
              label="Denumeste layout"
              type="text"
              onChange={this.handleTextUpdate}
              name="name"
              value={this.state.name}
            />

            <br />
            <br />

            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedHasCover}
                      onChange={this.handleChangeHasCover}
                      name="photoOnC1"
                      color="primary"
                    />
                  }
                  label="Este coperta"
                />
              </FormGroup>
            </FormControl>
            <br />
            <br />
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
                  label="Are poza pe coperta"
                />
              </FormGroup>
            </FormControl>

            <br />
            <br />

            <ImageUploader
              label="Marime imagine max: 4MB se accepta doar .jpg, .png"
              withIcon={false}
              buttonText='Alege imagine C1 & C4'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.png']}
              maxFileSize={5242880}
              withPreview={true}
              withLabel={false}
              fileContainerStyle={{
                padding: "0px",
                alignItems: "flex-start",
                margin: "10px auto"
              }}
            />

            <DropDown
              options={["layout C1C4 1", "layout C1C4 2", "layout C1C4 3"]}
              value={this.state.layoutC1C4}
              label="Layout default pentru C1 & C4"
              name="layoutC1C4"
              handleChangeDropdown={this.handleChangeDropdown}
            />

          </Grid>

          <br />
          <Grid item xs={4}>

            <ImageUploader
              label="Marime imagine max: 4MB se accepta doar .jpg, .png"
              withIcon={false}
              buttonText='Alege imagine C3'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              withPreview={true}
              withLabel={false}
              fileContainerStyle={{
                padding: "0px",
                alignItems: "flex-start",
                margin: "10px auto"
              }}
            />
            <ImageUploader
              label="Marime imagine max: 4MB se accepta doar .jpg, .png"
              withIcon={false}
              buttonText='Alege imagine C2'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              withPreview={true}
              withLabel={false}
              fileContainerStyle={{
                padding: "0px",
                alignItems: "flex-start",
                margin: "10px auto"
              }}
            />

          </Grid>
          <Grid item xs={4}>


            scrollable themes

          </Grid>
        </Grid>
      </Container >
    );
  }
}

export default NewTheme;
