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

import DropDownLayouts from "./lowLeveComponents/DropDownLayouts";
import RenderedPage from "../layoutComponents/RenderedPage";
import RenderedCover from "../layoutComponents/RenderedCover";
import Draggable from 'react-draggable';


class NewTheme extends React.Component {

  constructor(props) {
    super(props);

    const pageLayoutsList = this.props.layouts.filter(l => l.tipLayout === "Pagina");
    const coverLayoutsList = this.props.layouts.filter(l => l.tipLayout !== "Pagina");

    this.state = {
      name: "",
      checkedIsCover: false,
      layoutUsed: "",



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
      layoutC3: "",
      pageLayouts: pageLayoutsList,
      coverLayouts: coverLayoutsList,

      pictures: [],

      zoom: 1
    };
  }

  componentDidMount() {

  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event });
  };
  handleChangeDropdown = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
    this.props.getLayoutsForId(event.target.value);
  };
  handleChangeCheck = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  showOnlyForCategory = (category) => {
    const categs = [...category];
    let conditionEval = categs.includes(this.props.returnedLayout.tipLayout);
    return (
      this.props.returnedLayout.tipLayout !== "" &&
      conditionEval === true) ? true : false
  }
  zoomOut = () => {
    this.setState((prevState) => ({
      zoom: prevState.zoom + 0.1
    }))
  }
  zoomIn = (prevState) => {
    this.setState((prevState) => ({
      zoom: prevState.zoom - 0.1
    }))
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {

    const renderer = {
      width: `${this.props.returnedLayout.rendererWidth}px`,
      height: `${this.props.returnedLayout.rendererHeight}px`,
      background: "#f0f0f0",
      paddingTop: "100px",
      overflow: "hidden"
    }


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
              label="Denumeste tematica"
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
                      checked={this.state.checkedIsCover}
                      onChange={this.handleChangeCheck}
                      name="checkedIsCover"
                      color="primary"
                    />
                  }
                  label="Este coperta"
                />
              </FormGroup>
            </FormControl>
            <br />



            <DropDownLayouts
              pageLayouts={this.state.checkedIsCover !== true ? this.state.pageLayouts : this.state.coverLayouts}
              value={this.state.layoutUsed}
              label="Alege layout pentru tematica"
              name="layoutUsed"
              handleChangeDropdown={this.handleChangeDropdown}
              getLayoutsForId={this.props.getLayoutsForId}
            />


            <br />

            <ImageUploader
              label="Marime imagine max: 4MB se accepta doar .jpg, .png"
              withIcon={false}
              buttonText='Imagine background'
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


          </Grid>

          <br />
          <Grid item xs={6}>

            <Button
              variant="contained"
              style={{ backgroundColor: "#e14013", color: "#FFF", margin: "0px 20px 20px 0px" }}
              onClick={() => {
                this.zoomOut();
              }}
            >
              Zoom in
          </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#e14013", color: "#FFF", margin: "0px 20px 20px 0px" }}
              onClick={() => {
                this.zoomIn();
              }}
            >
              Zoom out
          </Button>

            <div id="renderer" style={renderer}>


              <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                  <div className="handle">
                    {console.log(this.state.picture)}


                    <img style={{ width: "100%" }} src={this.state.picture} />
                    {this.showOnlyForCategory(["Pagina"]) &&

                      <div>
                        <RenderedPage
                          tipLayout={this.props.returnedLayout.tipLayout}
                          rowsLayout={this.props.returnedLayout.rowsLayout}
                          layoutPadding={this.props.returnedLayout.layoutPadding}
                          layoutWidth={this.props.returnedLayout.layoutWidth}
                          layoutHeight={this.props.returnedLayout.layoutHeight}
                          row1={this.props.returnedLayout.row1}
                          row1Col1={this.props.returnedLayout.row1Col1}
                          row1Col2={this.props.returnedLayout.row1Col2}
                          row1Col3={this.props.returnedLayout.row1Col3}
                          row1Col4={this.props.returnedLayout.row1Col4}
                          row2={this.props.returnedLayout.row2}
                          row2Col1={this.props.returnedLayout.row2Col1}
                          row2Col2={this.props.returnedLayout.row2Col2}
                          row2Col3={this.props.returnedLayout.row2Col3}
                          row2Col4={this.props.returnedLayout.row2Col4}
                          row3={this.props.returnedLayout.row3}
                          row3Col1={this.props.returnedLayout.row3Col1}
                          row3Col2={this.props.returnedLayout.row3Col2}
                          row3Col3={this.props.returnedLayout.row3Col3}
                          row3Col4={this.props.returnedLayout.row3Col4}
                          row4={this.props.returnedLayout.row4}
                          row4Col1={this.props.returnedLayout.row4Col1}
                          row4Col2={this.props.returnedLayout.row4Col2}
                          row4Col3={this.props.returnedLayout.row4Col3}
                          row4Col4={this.props.returnedLayout.row4Col4}
                          backgroundPicture={this.state.picture}
                          zoom={this.state.zoom} />
                      </div>}


                    {this.showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&
                      <RenderedCover
                        tipLayout={this.props.returnedLayout.tipLayout}
                        layoutWidth={this.props.returnedLayout.layoutWidth}
                        layoutHeight={this.props.returnedLayout.layoutHeight}
                        coverHasImage={this.props.returnedLayout.coverHasImage}
                        coverImageWidth={this.props.returnedLayout.coverImageWidth}
                        coverImageHeight={this.props.returnedLayout.coverImageHeight}
                        coverImageTopPosition={this.props.returnedLayout.coverImageTopPosition}
                        coverImageLeftPosition={this.props.returnedLayout.coverImageLeftPosition}
                        zoom={this.state.zoom} />}

                  </div>
                </div>
              </Draggable>


            </div>

          </Grid>
          <Grid item xs={2}>


            scrollable themes

          </Grid>
        </Grid>
      </Container >
    );
  }
}

export default NewTheme;
