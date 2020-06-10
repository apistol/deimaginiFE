import React, { useState, useEffect, useContext } from "react";
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
import LayoutsContext from "../context/layoutsContext/layoutContext"



const NewLayout = (props) => {

  const contextType = useContext(LayoutsContext);

  const [layout, setLayout] = useState({
    layoutsList: (contextType !== undefined) ? contextType.layoutsList : [],
    returnedLayout: (contextType !== undefined) && contextType.returnedLayout,

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
  })




  useEffect(() => {
    (contextType !== undefined) && setLayout({
      ...layout,
      returnedLayout: contextType.returnedLayout
    })
  }, [contextType])



  const handleTextUpdate = (event) => {
    setLayout({ ...layout, [event.target.name]: event.target.value });
  };

  const handleChangeCheck = (event) => {
    setLayout({ ...layout, [event.target.name]: event.target.checked });
  };

  const handleChangeDropdown = (value) => {
    setLayout({
      ...layout,
      [value.target.name]: value.target.value,
    });
  };

  const zoomOut = () => {
    setLayout({
      ...layout,
      // zoom: zoom + 0.1
    })
  }
  const zoomIn = (prevState) => {
    setLayout({
      ...layout,
      // zoom: zoom - 0.1
    })
  }

  const handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };


  const showOnlyForCategory = (category) => {
    const categs = [...category];
    let conditionEval = categs.includes(layout.tipLayout);
    return (
      layout.tipLayout !== "" &&
      conditionEval === true) ? true : false
  }


  const renderer = {
    width: `${layout.rendererWidth}px`,
    height: `${layout.rendererHeight}px`,
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
          contextType.createNewLayout(layout);
        }}
      >
        {layout.name !== "" ? "Creeaza" : "Update"}
      </Button>



      <Grid container spacing={3}>


        <Grid item xs={4}>

          <GeneralFields
            handleTextUpdate={handleTextUpdate}
            handleChangeDropdown={handleChangeDropdown}
            name={(layout.returnedLayout !== null) ? layout.returnedLayout.name : layout.name}
            categLayout={(layout.returnedLayout !== null) ? layout.returnedLayout.categLayout : layout.categLayout}
            tipLayout={(layout.returnedLayout !== null) ? layout.returnedLayout.tipLayout : layout.tipLayout}
            layoutWidth={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutWidth : layout.layoutWidth}
            layoutHeight={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutHeight : layout.layoutHeight}

          />


          {showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&

            <LayoutCoverFields
              handleChangeCheck={handleChangeCheck}
              handleTextUpdate={handleTextUpdate}
              coverHasImage={(layout.returnedLayout !== null) ? layout.returnedLayout.coverHasImage : layout.coverHasImage}
              coverImageWidth={(layout.returnedLayout !== null) ? layout.returnedLayout.coverImageWidth : layout.coverImageWidth}
              coverImageHeight={(layout.returnedLayout !== null) ? layout.returnedLayout.coverImageHeight : layout.coverImageHeight}
              coverImageTopPosition={(layout.returnedLayout !== null) ? layout.returnedLayout.coverImageTopPosition : layout.coverImageTopPosition}
              coverImageLeftPosition={(layout.returnedLayout !== null) ? layout.returnedLayout.coverImageLeftPosition : layout.coverImageLeftPosition}
            />


          }




          {(showOnlyForCategory(["Pagina"]) &&
            <div>
              <LayoutPageFields
                handleTextUpdate={handleTextUpdate}
                handleChangeDropdown={handleChangeDropdown}
                rowsLayout={(layout.returnedLayout !== null) ? layout.returnedLayout.rowsLayout : layout.rowsLayout}
                layoutPadding={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutPadding : layout.layoutPadding}
                row1={(layout.returnedLayout !== null) ? layout.returnedLayout.row1 : layout.row1}
                row1Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col1 : layout.row1Col1}
                row1Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col2 : layout.row1Col2}
                row1Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col3 : layout.row1Col3}
                row1Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col4 : layout.row1Col4}
                row2={(layout.returnedLayout !== null) ? layout.returnedLayout.row2 : layout.row2}
                row2Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col1 : layout.row2Col1}
                row2Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col2 : layout.row2Col2}
                row2Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col3 : layout.row2Col3}
                row2Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col4 : layout.row2Col4}
                row3={(layout.returnedLayout !== null) ? layout.returnedLayout.row3 : layout.row3}
                row3Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col1 : layout.row3Col1}
                row3Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col2 : layout.row3Col2}
                row3Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col3 : layout.row3Col3}
                row3Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col4 : layout.row3Col4}
                row4={(layout.returnedLayout !== null) ? layout.returnedLayout.row4 : layout.row4}
                row4Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col1 : layout.row4Col1}
                row4Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col2 : layout.row4Col2}
                row4Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col3 : layout.row4Col3}
                row4Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col4 : layout.row4Col4}
              />
            </div>
          )}


          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={layout.hasText}
                    onChange={handleChangeCheck}
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
                    checked={layout.editableText}
                    onChange={handleChangeCheck}
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
                    checked={layout.editableBackground}
                    onChange={handleChangeCheck}
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
              zoomOut();
            }}
          >
            Zoom in
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#e14013", color: "#FFF", margin: "0px 20px 20px 0px" }}
            onClick={() => {
              zoomIn();
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
              // onStart={handleStart}
              onDrag={handleDrag}
            // onStop={handleStop}
            >
              <div>
                <div className="handle">

                  {showOnlyForCategory(["Pagina"]) &&

                    <div>
                      <RenderedPage
                        tipLayout={(layout.returnedLayout !== null) ? layout.returnedLayout.tipLayout : layout.tipLayout}
                        rowsLayout={(layout.returnedLayout !== null) ? layout.returnedLayout.rowsLayout : layout.rowsLayout}
                        layoutPadding={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutPadding : layout.layoutPadding}
                        layoutWidth={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutWidth : layout.layoutWidth}
                        layoutHeight={(layout.returnedLayout !== null) ? layout.returnedLayout.layoutHeight : layout.layoutHeight}
                        row1={(layout.returnedLayout !== null) ? layout.returnedLayout.row1 : layout.row1}
                        row1Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col1 : layout.row1Col1}
                        row1Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col2 : layout.row1Col2}
                        row1Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col3 : layout.row1Col3}
                        row1Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row1Col4 : layout.row1Col4}
                        row2={(layout.returnedLayout !== null) ? layout.returnedLayout.row2 : layout.row2}
                        row2Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col1 : layout.row2Col1}
                        row2Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col2 : layout.row2Col2}
                        row2Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col3 : layout.row2Col3}
                        row2Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row2Col4 : layout.row2Col4}
                        row3={(layout.returnedLayout !== null) ? layout.returnedLayout.row3 : layout.row3}
                        row3Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col1 : layout.row3Col1}
                        row3Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col2 : layout.row3Col2}
                        row3Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col3 : layout.row3Col3}
                        row3Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row3Col4 : layout.row3Col4}
                        row4={(layout.returnedLayout !== null) ? layout.returnedLayout.row4 : layout.row4}
                        row4Col1={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col1 : layout.row4Col1}
                        row4Col2={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col2 : layout.row4Col2}
                        row4Col3={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col3 : layout.row4Col3}
                        row4Col4={(layout.returnedLayout !== null) ? layout.returnedLayout.row4Col4 : layout.row4Col4}
                        zoom={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.zoom} />
                    </div>}


                  {showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&
                    <RenderedCover
                      tipLayout={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.tipLayout}
                      layoutWidth={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.layoutWidth}
                      layoutHeight={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.layoutHeight}
                      coverHasImage={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.coverHasImage}
                      coverImageWidth={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.coverImageWidth}
                      coverImageHeight={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.coverImageHeight}
                      coverImageTopPosition={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.coverImageTopPosition}
                      coverImageLeftPosition={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.coverImageLeftPosition}
                      zoom={(layout.returnedLayout !== null) ? contextType.returnedLayout.zoom : layout.zoom} />}

                </div>
              </div>
            </Draggable>


          </div>
        </Grid>


        <Grid item xs={3}>


          {(layout.layoutsList !== undefined) ? layout.layoutsList.map(l =>
            <ViewerComponent
              key={l.id}
              id={l.id}
              name={l.name}
              tipLayout={l.tipLayout}
              categLayout={l.categLayout}
              getLayoutsForId={contextType.getLayoutsForId}
              deleteLayoutsForId={contextType.deleteLayoutsForId}
              duplicateLayoutsForId={contextType.duplicateLayoutsForId}
            />) : ""
          }
        </Grid>




      </Grid>



    </Container >
  );
}

export default NewLayout;
