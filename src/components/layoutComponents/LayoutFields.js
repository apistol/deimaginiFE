import React, { useContext } from "react";

import TextField from "@material-ui/core/TextField";
import DropDown from "../lowLeveComponents/DropDown";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import LayoutCoverFields from "./LayoutCoverFields";
import LayoutPageFields from "./LayoutPageFields";
import LayoutPageFieldsSecondPage from "./LayoutPageFieldsSecondPage";
import LayoutContext from "../../context/layoutsContext/layoutContext";

const LayoutFields = () => {
  const layoutsContext = useContext(LayoutContext);

  const {
    fields,

    name,
    categLayout,
    tipLayout,
    opening,

    layoutWidth,
    layoutHeight,

    hasText,
    editableText,
    editableBackground,

    returnedLayout,
    coverHasImage,
    coverImageWidth,
    coverImageHeight,
    coverImageTopPosition,
    coverImageLeftPosition,

    paddingBetweenImages,
    borderWidth,
    dropShadow,

    rowsLayout,
    layoutPadding,
    row1,
    row1Col1,
    row1Col2,
    row1Col3,
    row1Col4,
    row2,
    row2Col1,
    row2Col2,
    row2Col3,
    row2Col4,
    row3,
    row3Col1,
    row3Col2,
    row3Col3,
    row3Col4,
    row4,
    row4Col1,
    row4Col2,
    row4Col3,
    row4Col4,
    zoom,

    secondLayoutCoverHasImage,
    secondLayoutCoverImageWidth,
    secondLayoutCoverImageHeight,
    secondLayoutCoverImageTopPosition,
    secondLayoutCoverImageLeftPosition,
    secondLayoutPaddingBetweenImages,
    secondLayoutBorderWidth,
    secondLayoutDropShadow,

    secondLayoutRowsLayout,
    secondLayoutLayoutPadding,
    secondLayoutRow1,
    secondLayoutRow1Col1,
    secondLayoutRow1Col2,
    secondLayoutRow1Col3,
    secondLayoutRow1Col4,
    secondLayoutRow2,
    secondLayoutRow2Col1,
    secondLayoutRow2Col2,
    secondLayoutRow2Col3,
    secondLayoutRow2Col4,
    secondLayoutRow3,
    secondLayoutRow3Col1,
    secondLayoutRow3Col2,
    secondLayoutRow3Col3,
    secondLayoutRow3Col4,
    secondLayoutRow4,
    secondLayoutRow4Col1,
    secondLayoutRow4Col2,
    secondLayoutRow4Col3,
    secondLayoutRow4Col4,
    secondLayoutZoom,
  } = layoutsContext.propsForLayout;

  const {
    // Functions
    handleTextUpdate,
    handleChangeDropdown,
    handleChangeCheck,
    zoomOut,
    zoomIn,
    handleChangeSwitch,
  } = layoutsContext;

  return (
    <Container
      direction="row"
      style={{
        marginBottom: "60px",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e14013",
              color: "#FFF",
              marginRight: "8px",
            }}
            onClick={() => {
              layoutsContext.createNewLayout(fields);
            }}
          >
            Creeaza
          </Button>
          <br />
          <TextField
            label="Denumeste layoutul"
            type="text"
            onChange={(event) => handleTextUpdate(event)}
            name="name"
            value={name}
          />
          <br />
          <DropDown
            options={[
              "Clasic",
              "Horizon",
              "Panoramic clasic",
              "Panoramic horizon",
            ]}
            value={categLayout}
            label="Categorie layout"
            name="categLayout"
            handleChangeDropdown={(event) => handleChangeDropdown(event)}
          />
          <br />
          <DropDown
            options={["CopertaC1C4", "CopertaC2", "CopertaC3", "Pagina"]}
            value={tipLayout}
            label="Tip layout"
            name="tipLayout"
            handleChangeDropdown={(event) => handleChangeDropdown(event)}
          />
          <br />
          //TODO fix this shit
          {/* <p style={{ margin: "0px", padding: "0px" }}>
            {" "}
            <Switch
              checked={fields.opening}
              onChange={(event) => handleChangeSwitch(event)}
              color="primary"
              name="opening"
            />{" "}
            Este deschidere
          </p> */}
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Latime layout"
            type="text"
            onChange={(event) => handleTextUpdate(event)}
            name="layoutWidth"
            value={layoutWidth}
          />
          <br />
          <TextField
            label="Inaltime layout"
            type="text"
            onChange={(event) => handleTextUpdate(event)}
            name="layoutHeight"
            value={layoutHeight}
          />
          <br /> <br /> <br />
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={hasText}
                    onChange={handleChangeCheck}
                    name="hasText"
                    color="primary"
                  />
                }
                label="Are text"
              />
            </FormGroup>
          </FormControl>
          <br />
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={editableText}
                    onChange={handleChangeCheck}
                    name="editableText"
                    color="primary"
                  />
                }
                label="Este editabil textul"
              />
            </FormGroup>
          </FormControl>
          <br />
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={editableBackground}
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

        {/* TODO add opening check and display  fields */}

        <Grid item xs={4}>
          {tipLayout !== "" && tipLayout !== "Pagina" ? (
            <LayoutCoverFields
              handleChangeCheck={handleChangeCheck}
              handleTextUpdate={handleTextUpdate}
              coverHasImage={coverHasImage}
              coverImageWidth={coverImageWidth}
              coverImageHeight={coverImageHeight}
              coverImageTopPosition={coverImageTopPosition}
              coverImageLeftPosition={coverImageLeftPosition}
            />
          ) : (
            ""
          )}

{/* TODO hanfle the double layout */}
          {tipLayout !== "" && tipLayout !== "Pagina" && opening === true ? (
            <LayoutCoverFields
              handleChangeCheck={handleChangeCheck}
              handleTextUpdate={handleTextUpdate}
              coverHasImage={secondLayoutCoverHasImage}
              coverImageWidth={secondLayoutCoverImageWidth}
              coverImageHeight={secondLayoutCoverImageHeight}
              coverImageTopPosition={secondLayoutCoverImageTopPosition}
              coverImageLeftPosition={secondLayoutCoverImageLeftPosition}
            />
          ) : (
            ""
          )}

          {tipLayout !== "" && tipLayout === "Pagina" ? (
            <LayoutPageFields
              handleTextUpdate={handleTextUpdate}
              handleChangeDropdown={handleChangeDropdown}
              rowsLayout={rowsLayout}
              layoutPadding={layoutPadding}
              paddingBetweenImages={paddingBetweenImages}
              borderWidth={borderWidth}
              dropShadow={dropShadow}
              row1={row1}
              row1Col1={row1Col1}
              row1Col2={row1Col2}
              row1Col3={row1Col3}
              row1Col4={row1Col4}
              row2={row2}
              row2Col1={row2Col1}
              row2Col2={row2Col2}
              row2Col3={row2Col3}
              row2Col4={row2Col4}
              row3={row3}
              row3Col1={row3Col1}
              row3Col2={row3Col2}
              row3Col3={row3Col3}
              row3Col4={row3Col4}
              row4={row4}
              row4Col1={row4Col1}
              row4Col2={row4Col2}
              row4Col3={row4Col3}
              row4Col4={row4Col4}
            />
          ) : (
            ""
          )}

{/* TODO Reuse the same component */}
          {tipLayout !== "" && tipLayout === "Pagina" && opening === true ? (
            <LayoutPageFieldsSecondPage
              handleTextUpdate={handleTextUpdate}
              handleChangeDropdown={handleChangeDropdown}
              secondLayoutRowsLayout={secondLayoutRowsLayout}
              secondLayoutLayoutPadding={secondLayoutLayoutPadding}
              secondLayoutPaddingBetweenImages={
                secondLayoutPaddingBetweenImages
              }
              secondLayoutBorderWidth={secondLayoutBorderWidth}
              secondLayoutDropShadow={secondLayoutDropShadow}
              secondLayoutRow1={secondLayoutRow1}
              secondLayoutRow1Col1={secondLayoutRow1Col1}
              secondLayoutRow1Col2={secondLayoutRow1Col2}
              secondLayoutRow1Col3={secondLayoutRow1Col3}
              secondLayoutRow1Col4={secondLayoutRow1Col4}
              secondLayoutRow2={secondLayoutRow2}
              secondLayoutRow2Col1={secondLayoutRow2Col1}
              secondLayoutRow2Col2={secondLayoutRow2Col2}
              secondLayoutRow2Col3={secondLayoutRow2Col3}
              secondLayoutRow2Col4={secondLayoutRow2Col4}
              secondLayoutRow3={secondLayoutRow3}
              secondLayoutRow3Col1={secondLayoutRow3Col1}
              secondLayoutRow3Col2={secondLayoutRow3Col2}
              secondLayoutRow3Col3={secondLayoutRow3Col3}
              secondLayoutRow3Col4={secondLayoutRow3Col4}
              secondLayoutRow4={secondLayoutRow4}
              secondLayoutRow4Col1={secondLayoutRow4Col1}
              secondLayoutRow4Col2={secondLayoutRow4Col2}
              secondLayoutRow4Col3={secondLayoutRow4Col3}
              secondLayoutRow4Col4={secondLayoutRow4Col4}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LayoutFields;
