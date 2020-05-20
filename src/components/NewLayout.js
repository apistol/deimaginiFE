import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DropDown from "./lowLeveComponents/DropDown";



class NewLayout extends React.Component {
  state = {
    name: "",

    rendererWidth: 500,
    rendererHeight: 600,

    tipLayout: "",
    categLayout: "",

    layoutWidth: "",
    layoutHeight: "",
    rowsLayout: 0,

    row1: "",
    row1Col1: "",
    row1Col2: "",
    row1Col3: "",
    row1Col4: "",

    row2: "",
    row2Col1: "",
    row2Col2: "",
    row2Col3: "",
    row2Col4: "",

    row3: "",
    row3Col1: "",
    row3Col2: "",
    row3Col3: "",
    row3Col4: "",

    row4: "",
    row4Col1: "",
    row4Col2: "",
    row4Col3: "",
    row4Col4: "",


    layoutPadding: "",

    coverHasImage: false,
    coverImageWidth: "",
    coverImageHeight: "",
    coverImageTopPosition: "",
    coverImageLeftPosition: "",

    hasText: false,
    editableText: false,
    editableBackground: false,

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

    this.setState({
      ...this.state,
      [value.target.name]: value.target.value,
    });
  };


  render() {

    const renderer = {
      width: `${this.state.rendererWidth}px`,
      height: `${this.state.rendererHeight}px`,
      background: "#f0f0f0",
      paddingTop: "100px"
    }

    const layoutStyle = {
      display: `${this.state.tipLayout == "Pagina" ? "inherit" : "none"}`,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      width: `${this.state.layoutWidth}px`,
      height: `${this.state.layoutHeight}px`,
      margin: "auto",
      border: "1px solid #000000",
      padding: `${this.state.layoutPadding}px`
    }

    const fixWrapping = {
      flexWrap: "inherit",
      height: `${this.state.layoutHeight / this.state.rowsLayout}px`
    }

    const column = {
      border: "1px solid #000000",
      width: "100%",
      height: "100%"
    }



    return (

      <Container
        direction="column"
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
            this.props.handleCreateNewLayout(this.state);
          }}
        >
          {this.props.name !== "" ? "Creeaza" : "Update"}
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#e14013", color: "#FFF" }}
          onClick={() => {
            this.props.updateLayout();
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
              options={["Clasic", "Horizon", "Panoramic clasic", "Panoramic horizon"]}
              value={this.state.categLayout}
              label="Categorie layout"
              name="categLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />
            <br />
            <DropDown
              options={["CopertaC1C4", "CopertaC2", "CopertaC3", "Pagina"]}
              value={this.state.tipLayout}
              label="Tip layout"
              name="tipLayout"
              handleChangeDropdown={this.handleChangeDropdown}
            />


            <br />


            {(this.state.tipLayout !== "Pagina" &&
              this.state.tipLayout !== "") &&

              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.coverHasImage}
                        onChange={this.handleChangeCheck}
                        name="coverHasImage"
                        color="primary"
                      />
                    }
                    label="Are imagine de coperta"
                  />
                </FormGroup>
              </FormControl>
            }



            {(this.state.coverHasImage == true &&
              this.state.tipLayout !== "Pagina") &&

              <div>
                <br />
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
                  onChange={this.handleTextUpdate}
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
                  onChange={this.handleTextUpdate}
                  name="coverImageLeftPosition"
                  value={this.state.coverImageLeftPosition}
                />
              </div>
            }



            {(this.state.tipLayout == "Pagina") &&
              <div>

                <TextField
                  id="standard-basic"
                  label="Latime layout"
                  type="text"
                  onChange={this.handleTextUpdate}
                  name="layoutWidth"
                  value={this.state.layoutWidth}
                />
                <br />

                <TextField
                  id="standard-basic"
                  label="Inaltime layout"
                  type="text"
                  onChange={this.handleTextUpdate}
                  name="layoutHeight"
                  value={this.state.layoutHeight}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="Padding layout"
                  type="text"
                  onChange={this.handleTextUpdate}
                  name="layoutPadding"
                  value={this.state.layoutPadding}
                />

                <br />

                {/* Number of rows */}
                <DropDown
                  options={["1", "2", "3", "4"]}
                  value={this.state.rowsLayout}
                  label="Randuri layout"
                  name="rowsLayout"
                  handleChangeDropdown={this.handleChangeDropdown}
                />




                {/* ROW 1 */}


                {(this.state.rowsLayout >= 1) &&
                  <div>
                    <DropDown
                      options={["1", "2", "3", "4"]}
                      value={this.state.row1}
                      label="Numar coloane row 1"
                      name="row1"
                      handleChangeDropdown={this.handleChangeDropdown}
                    />

                    {(this.state.row1 >= 1) &&
                      <TextField
                        label="Expand coloana 1"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row1Col1"
                        value={this.state.row1Col1}
                      />
                    }

                    {(this.state.row1 >= 2) &&

                      <TextField
                        label="Expand coloana 2"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row1Col2"
                        value={this.state.row1Col2}
                      />
                    }

                    {(this.state.row1 >= 3) &&

                      <TextField
                        label="Expand coloana 3"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row1Col3"
                        value={this.state.row1Col3}
                      />
                    }

                    {(this.state.row1 >= 4) &&

                      <TextField
                        label="Expand coloana 4"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row1Col4"
                        value={this.state.row1Col4}
                      />
                    }
                  </div>}




                {/* ROW 2 */}



                {(this.state.rowsLayout >= 1) &&
                  <div>
                    <p>---------------------------------------</p>
                    <DropDown
                      options={["1", "2", "3", "4"]}
                      value={this.state.row2}
                      label="Numar coloane row 2"
                      name="row2"
                      handleChangeDropdown={this.handleChangeDropdown}
                    />

                    {(this.state.row2 >= 1) &&
                      <TextField
                        label="Expand coloana 1"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row2Col1"
                        value={this.state.row2Col1}
                      />
                    }

                    {(this.state.row2 >= 2) &&

                      <TextField
                        label="Expand coloana 2"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row2Col2"
                        value={this.state.row2Col2}
                      />
                    }

                    {(this.state.row2 >= 3) &&

                      <TextField
                        label="Expand coloana 3"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row2Col3"
                        value={this.state.row2Col3}
                      />
                    }

                    {(this.state.row2 >= 4) &&

                      <TextField
                        label="Expand coloana 4"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row2Col4"
                        value={this.state.row2Col4}
                      />
                    }
                  </div>}




                {/* ROW 3 */}

                {(this.state.rowsLayout >= 3) &&
                  <div>
                    <p>---------------------------------------</p>
                    <DropDown
                      options={["1", "2", "3", "4"]}
                      value={this.state.row3}
                      label="Numar coloane row 3"
                      name="row3"
                      handleChangeDropdown={this.handleChangeDropdown}
                    />

                    {(this.state.row3 >= 1) &&
                      <TextField
                        label="Expand coloana 1"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row2Col1"
                        value={this.state.row3Col1}
                      />
                    }

                    {(this.state.row3 >= 2) &&

                      <TextField
                        label="Expand coloana 2"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row3Col2"
                        value={this.state.row3Col2}
                      />
                    }

                    {(this.state.row3 >= 3) &&

                      <TextField
                        label="Expand coloana 3"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row3Col3"
                        value={this.state.row3Col3}
                      />
                    }

                    {(this.state.row3 >= 4) &&

                      <TextField
                        label="Expand coloana 4"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row3Col4"
                        value={this.state.row3Col4}
                      />
                    }
                  </div>}



                {/* ROW 4 */}

                {(this.state.rowsLayout >= 4) &&
                  <div>
                    <p>---------------------------------------</p>
                    <DropDown
                      options={["1", "2", "3", "4"]}
                      value={this.state.row4}
                      label="Numar coloane row 4"
                      name="row4"
                      handleChangeDropdown={this.handleChangeDropdown}
                    />

                    {(this.state.row4 >= 1) &&

                      <TextField
                        label="Expand coloana 1"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row4Col1"
                        value={this.state.row4Col1}
                      />
                    }

                    {(this.state.row4 >= 2) &&

                      <TextField
                        label="Expand coloana 2"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row4Col2"
                        value={this.state.row4Col2}
                      />
                    }

                    {(this.state.row4 >= 3) &&

                      <TextField
                        label="Expand coloana 3"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row4Col3"
                        value={this.state.row4Col3}
                      />
                    }

                    {(this.state.row4 >= 4) &&

                      <TextField
                        label="Expand coloana 4"
                        type="text"
                        onChange={this.handleTextUpdate}
                        name="row4Col4"
                        value={this.state.row4Col4}
                      />
                    }
                  </div>}

              </div>
            }


            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.hasText}
                      onChange={this.handleChangeCheck}
                      name="hasText"
                      color="primary"
                    />
                  }
                  label="Are text"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.editableText}
                      onChange={this.handleChangeCheck}
                      name="editableText"
                      color="primary"
                    />
                  }
                  label="Este editabil textul"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.editableBackground}
                      onChange={this.handleChangeCheck}
                      name="editableBackground"
                      color="primary"
                    />
                  }
                  label="Este editabil backgroundul"
                />
              </FormGroup>
            </FormControl>

          </Grid>





          <Grid xs={5}>

            <div id="renderer" style={renderer}>
              <div id="layoutStyle" style={layoutStyle}>




                {/* row 1 */}
                {(this.state.rowsLayout >= 1) &&
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={fixWrapping}>

                    {(this.state.row1 >= 1) &&
                      <Grid item xs={this.state.row1Col1} style={column}>
                        row1col1
                    </Grid>}

                    {(this.state.row1 >= 2) &&
                      <Grid item xs={this.state.row1Col2} style={column}>
                        row1col2
                    </Grid>}

                    {(this.state.row1 >= 3) &&
                      <Grid item xs={this.state.row1Col3} style={column}>
                        row1col3
                    </Grid>}

                    {(this.state.row1 >= 4) &&
                      <Grid item xs={this.state.row1Col4} style={column}>
                        row1col4
                    </Grid>}
                  </Grid>}


                {/* row 2 */}
                {(this.state.rowsLayout >= 2) &&
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={fixWrapping}>

                    {(this.state.row2 >= 1) &&
                      <Grid item xs={this.state.row2Col1} style={column}>
                        row2col1
                    </Grid>}

                    {(this.state.row2 >= 2) &&
                      <Grid item xs={this.state.row2Col2} style={column}>
                        row2col2
                    </Grid>}

                    {(this.state.row2 >= 3) &&
                      <Grid item xs={this.state.row2Col3} style={column}>
                        row2col3
                    </Grid>}

                    {(this.state.row2 >= 4) &&
                      <Grid item xs={this.state.row2Col4} style={column}>
                        row2col4
                    </Grid>}
                  </Grid>}


                {/* row 3 */}
                {(this.state.rowsLayout >= 3) &&
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={fixWrapping}>


                    {(this.state.row3 >= 1) &&
                      <Grid item xs={this.state.row3Col1} style={column}>
                        row3col1
                    </Grid>}

                    {(this.state.row3 >= 2) &&
                      <Grid item xs={this.state.row3Col2} style={column}>
                        row3col2
                    </Grid>}

                    {(this.state.row3 >= 3) &&
                      <Grid item xs={this.state.row3Col3} style={column}>
                        row3col3
                    </Grid>}

                    {(this.state.row3 >= 4) &&
                      <Grid item xs={this.state.row3Col4} style={column}>
                        row3col4
                    </Grid>}
                  </Grid>}


                {/* row 4 */}
                {(this.state.rowsLayout >= 4) &&
                  <Grid
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={fixWrapping}>


                    {(this.state.row4 >= 1) &&
                      <Grid item xs={this.state.row4Col1} style={column}>
                        row4col1
                    </Grid>}

                    {(this.state.row4 >= 2) &&
                      <Grid item xs={this.state.row4Col2} style={column}>
                        row4col2
                    </Grid>}

                    {(this.state.row4 >= 3) &&
                      <Grid item xs={this.state.row4Col3} style={column}>
                        row4col3
                    </Grid>}

                    {(this.state.row4 >= 4) &&
                      <Grid item xs={this.state.row4Col4} style={column}>
                        row4col4
                    </Grid>}
                  </Grid>}


              </div>
            </div>
          </Grid>



          <Grid xs={3}>
            {this.props.layouts.map(l => <div style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)", padding: "10px", marginBottom: "20px" }}>
              <h2>{l.name}</h2>
              <p>{l.tipLayout}</p>
              <p>{l.categLayout}</p>

              <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={() => {
                  this.props.updateProject();
                }}
              >
                Editeaza album
                      </Button>
              <br /> <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={() => {
                  this.props.updateProject();
                }}
              >
                Sterge album
                      </Button>
              <br /> <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={() => {
                  this.props.updateProject();
                }}
              >
                Duplica album
                      </Button>

            </div>)}
          </Grid>




        </Grid>



      </Container >
    );
  }
}

export default NewLayout;
