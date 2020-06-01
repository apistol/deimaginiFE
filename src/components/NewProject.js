import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ImageUploader from 'react-images-upload';

import DropDown from "./lowLeveComponents/DropDown";

class NewProject extends React.Component {
  state = {
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
    picture: null
  };

  componentDidMount() {

  }

  handleTextUpdate = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleChangeCheck = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  handleChangeDropdown = (value) => {
    this.setState({ ...this.state, [value.target.name]: value.target.value });
  };

  onDrop = (event) => {
    this.setState({
      picture: event[0]
    });
  }

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



        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              label="Denumeste proiectul"
              type="text"
              onChange={this.handleTextUpdate}
              name="name"
              value={this.state.name}
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              label="Numar pagini"
              type="text"
              onChange={this.handleTextUpdate}
              name="pages"
              value={this.state.pages}
            />

            <DropDown
              options={["Album", "Calendar", "Carte", "Cadou", "Wall art", "Decor"]}
              value={this.state.tipProiect}
              label="Tip proiect"
              name="tipProiect"
              handleChangeDropdown={this.handleChangeDropdown}
            />

            <ImageUploader
              label="Marime imagine max: 4MB se accepta doar .jpg, .png"
              withIcon={false}
              buttonText='Alege imagine proiect'
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


            <br />
            <br />
          </Grid>
          <Grid item xs={4}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedHasCover}
                      onChange={this.handleChangeCheck}
                      name="checkedHasCover"
                      color="primary"
                    />
                  }
                  label="Are coperta"
                />
              </FormGroup>
            </FormControl>
            <br />
            <TextField
              id="standard-basic1"
              label="Latime coperta"
              type="text"
              onChange={this.handleTextUpdate}
              name="coverWidth"
              value={this.state.coverWidth}
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Inaltime coperta"
              type="text"
              onChange={this.handleTextUpdate}
              name="coverHeight"
              value={this.state.coverHeight}
            />
            <br />
            <TextField
              id="standard-basic3"
              label="Latime pagina"
              type="text"
              onChange={this.handleTextUpdate}
              name="pageWidth"
              value={this.state.pageWidth}
            />
            <br />
            <TextField
              id="standard-basic4"
              label="Inaltime pagina"
              type="text"
              onChange={this.handleTextUpdate}
              name="pageHeight"
              value={this.state.pageHeight}
            />
          </Grid>
          <Grid item xs={4}>
            <DropDown
              options={["hartie creponata", "hartie laminata", "carton"]}
              value={this.state.tipHartie}
              label="Tip hartie"
              name="tipHartie"
              handleChangeDropdown={this.handleChangeDropdown}
            />

            <TextField
              id="standard-basic5"
              label="Pret Ron"
              type="text"
              onChange={this.handleTextUpdate}
              name="pretRon"
              value={this.state.pretRon}
            />
            <br />
            <TextField
              id="standard-basic6"
              label="Pret Dolari"
              type="text"
              onChange={this.handleTextUpdate}
              name="pretDolari"
              value={this.state.pretDolari}
            />
            <br />
            <TextField
              id="standard-basic7"
              label="Pret Euro"
              type="text"
              onChange={this.handleTextUpdate}
              name="pretEuro"
              value={this.state.pretEuro}
            />
            <br />
            <TextField
              id="standard-basic8"
              label="Discount"
              type="text"
              onChange={this.handleTextUpdate}
              name="discount"
              value={this.state.discount}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default NewProject;
