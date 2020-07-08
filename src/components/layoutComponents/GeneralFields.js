import React, { useEffect, useState, useContext } from 'react'
import TextField from "@material-ui/core/TextField";
import DropDown from "../lowLeveComponents/DropDown";
import Button from "@material-ui/core/Button";
import LayoutCoverFields from "../layoutComponents/LayoutCoverFields";
import LayoutPageFields from "../layoutComponents/LayoutPageFields";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Renderer from "../Renderer"


import LayoutsContext from "../../context/layoutsContext/layoutContext"

const GeneralFields = () => {

    const layoutsContext = useContext(LayoutsContext);

    const [fields, setFields] = useState({
        name: "",
        categLayout: "",
        tipLayout: "",
        layoutWidth: "",
        layoutHeight: "",
        hasText: false,

        returnedLayout: "",
        coverHasImage: false,
        coverImageWidth: "",
        coverImageHeight: "",
        coverImageTopPosition: "",
        coverImageLeftPosition: "",

        paddingBetweenImages: "",
        borderWidth: "",
        dropShadow: "",

        hasText: false,
        editableText: false,
        editableBackground: false,

        rowsLayout: "",
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
        zoom: 1,
    })


    const {
        name,
        categLayout,
        tipLayout,
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
        zoom
    } = layoutsContext.returnedLayout ? { ...layoutsContext.returnedLayout } : fields

    const handleTextUpdate = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        });
    };


    const handleChangeDropdown = (value) => {
        setFields({
            ...fields,
            [value.target.name]: value.target.value,
        });
    };

    const handleChangeCheck = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.checked
        });
    };


    const zoomOut = () => {
        setFields({
            ...fields,
            zoom: zoom + 0.1
        })
    }
    const zoomIn = () => {
        setFields({
            ...fields,
            zoom: zoom - 0.1
        })
    }

    return (

        <Container
            direction="row"
            style={{
                marginBottom: "60px",
            }}
        >
            <Grid container  >


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
                        options={["Clasic", "Horizon", "Panoramic clasic", "Panoramic horizon"]}
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


                    {(tipLayout !== "" && tipLayout !== "Pagina") ? <LayoutCoverFields
                        handleChangeCheck={handleChangeCheck}
                        handleTextUpdate={handleTextUpdate}
                        coverHasImage={coverHasImage}
                        coverImageWidth={coverImageWidth}
                        coverImageHeight={coverImageHeight}
                        coverImageTopPosition={coverImageTopPosition}
                        coverImageLeftPosition={coverImageLeftPosition}
                    /> : ""
                    }

                    {(tipLayout !== "" && tipLayout === "Pagina") ?
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
                        /> : ""
                    }


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

                <Grid item xs={8}>
                    <Renderer
                        rendererWidth={500}
                        rendererHeight={600}
                        name={name}
                        categLayout={categLayout}
                        tipLayout={tipLayout}
                        layoutWidth={layoutWidth}
                        layoutHeight={layoutHeight}

                        hasText={hasText}
                        editableText={editableText}
                        editableBackground={editableBackground}

                        returnedLayout={returnedLayout}
                        coverHasImage={coverHasImage}
                        coverImageWidth={coverImageWidth}
                        coverImageHeight={coverImageHeight}
                        coverImageTopPosition={coverImageTopPosition}
                        coverImageLeftPosition={coverImageLeftPosition}

                        paddingBetweenImages={paddingBetweenImages}
                        borderWidth={borderWidth}
                        dropShadow={dropShadow}

                        rowsLayout={rowsLayout}
                        layoutPadding={layoutPadding}
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
                        zoom={zoom}
                        zoomOut={zoomOut}
                        zoomIn={zoomIn}
                    />
                </Grid>
            </Grid>
        </Container>


    )
}


export default GeneralFields