import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Draggable from 'react-draggable';
import GeneralFields from "../layoutComponents/GeneralFields";
import LayoutCoverFields from "../layoutComponents/LayoutCoverFields";
import LayoutPageFields from "../layoutComponents/LayoutPageFields";
import RenderedPage from "../layoutComponents/RenderedPage";
import RenderedCover from "../layoutComponents/RenderedCover";
import ViewerComponent from "../layoutComponents/ViewerComponent";
import axios from "axios";


class NewLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rendererWidth: 500,
      rendererHeight: 600,
      tipLayout: "",
      categLayout: "",
      layoutWidth: "",
      layoutHeight: "",


      coverHasImage: false,
      coverImageWidth: "",
      coverImageHeight: "",
      coverImageTopPosition: "",
      coverImageLeftPosition: "",


      rowsLayout: 0,
      layoutPadding: "",
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


      hasText: false,
      editableText: false,
      editableBackground: false,


      zoom: 1,
      returnedLayout: props.returnedLayout


    }
  }



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


  showOnlyForCategory = (category) => {
    const categs = [...category];
    let conditionEval = categs.includes(this.state.tipLayout);
    return (
      this.state.tipLayout !== "" &&
      conditionEval === true) ? true : false
  }


  getLayoutsForId = (layoutId) => {
    console.log(layoutId)
    axios
      .get(`/layout/${layoutId}`)
      .then((res) => {
        console.log({ ...res.data })
        this.setState({ ...res.data });
      })
      .catch((err) => console.log(err));
    this.props.getLayouts();
  };







  render() {

    const renderer = {
      width: `${this.state.rendererWidth}px`,
      height: `${this.state.rendererHeight}px`,
      background: "#f0f0f0",
      paddingTop: "100px",
      overflow: "hidden"
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



        <Grid container spacing={3}>


          <Grid item xs={4}>

            <GeneralFields
              handleTextUpdate={this.handleTextUpdate}
              handleChangeDropdown={this.handleChangeDropdown}
              name={this.state.name}
              categLayout={this.state.categLayout}
              tipLayout={this.state.tipLayout}
              layoutWidth={this.state.layoutWidth}
              layoutHeight={this.state.layoutHeight}

            />


            {this.showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&

              <LayoutCoverFields
                handleChangeCheck={this.handleChangeCheck}
                handleTextUpdate={this.handleTextUpdate}
                coverHasImage={this.state.coverHasImage}
                coverImageWidth={this.state.coverImageWidth}
                coverImageHeight={this.state.coverImageHeight}
                coverImageTopPosition={this.state.coverImageTopPosition}
                coverImageLeftPosition={this.state.coverImageLeftPosition}
              />


            }




            {(this.showOnlyForCategory(["Pagina"]) &&
              <div>
                <LayoutPageFields
                  handleTextUpdate={this.handleTextUpdate}
                  handleChangeDropdown={this.handleChangeDropdown}
                  rowsLayout={this.state.rowsLayout}
                  layoutPadding={this.state.layoutPadding}
                  row1={this.state.row1}
                  row1Col1={this.state.row1Col1}
                  row1Col2={this.state.row1Col2}
                  row1Col3={this.state.row1Col3}
                  row1Col4={this.state.row1Col4}
                  row2={this.state.row2}
                  row2Col1={this.state.row2Col1}
                  row2Col2={this.state.row2Col2}
                  row2Col3={this.state.row2Col3}
                  row2Col4={this.state.row2Col4}
                  row3={this.state.row3}
                  row3Col1={this.state.row3Col1}
                  row3Col2={this.state.row3Col2}
                  row3Col3={this.state.row3Col3}
                  row3Col4={this.state.row3Col4}
                  row4={this.state.row4}
                  row4Col1={this.state.row4Col1}
                  row4Col2={this.state.row4Col2}
                  row4Col3={this.state.row4Col3}
                  row4Col4={this.state.row4Col4}
                />
              </div>
            )}


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





          <Grid item xs={5}>

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

                    {this.showOnlyForCategory(["Pagina"]) &&

                      <div>
                        <RenderedPage
                          tipLayout={this.state.tipLayout}
                          rowsLayout={this.state.rowsLayout}
                          layoutPadding={this.state.layoutPadding}
                          layoutWidth={this.state.layoutWidth}
                          layoutHeight={this.state.layoutHeight}
                          row1={this.state.row1}
                          row1Col1={this.state.row1Col1}
                          row1Col2={this.state.row1Col2}
                          row1Col3={this.state.row1Col3}
                          row1Col4={this.state.row1Col4}
                          row2={this.state.row2}
                          row2Col1={this.state.row2Col1}
                          row2Col2={this.state.row2Col2}
                          row2Col3={this.state.row2Col3}
                          row2Col4={this.state.row2Col4}
                          row3={this.state.row3}
                          row3Col1={this.state.row3Col1}
                          row3Col2={this.state.row3Col2}
                          row3Col3={this.state.row3Col3}
                          row3Col4={this.state.row3Col4}
                          row4={this.state.row4}
                          row4Col1={this.state.row4Col1}
                          row4Col2={this.state.row4Col2}
                          row4Col3={this.state.row4Col3}
                          row4Col4={this.state.row4Col4}
                          zoom={this.state.zoom} />
                      </div>}


                    {this.showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&
                      <RenderedCover
                        tipLayout={this.state.tipLayout}
                        layoutWidth={this.state.layoutWidth}
                        layoutHeight={this.state.layoutHeight}
                        coverHasImage={this.state.coverHasImage}
                        coverImageWidth={this.state.coverImageWidth}
                        coverImageHeight={this.state.coverImageHeight}
                        coverImageTopPosition={this.state.coverImageTopPosition}
                        coverImageLeftPosition={this.state.coverImageLeftPosition}
                        zoom={this.state.zoom} />}

                  </div>
                </div>
              </Draggable>


            </div>
          </Grid>



          <Grid item xs={3}>
            {this.props.layouts.map(l =>
              <ViewerComponent
                key={l.id}
                id={l.id}
                name={l.name}
                tipLayout={l.tipLayout}
                categLayout={l.categLayout}
                getLayoutsForId={this.getLayoutsForId}
                deleteLayoutsForId={this.props.deleteLayoutsForId}
                duplicateLayoutsForId={this.props.duplicateLayoutsForId}

              />)}
          </Grid>




        </Grid>



      </Container >
    );
  }
}

export default NewLayout;
