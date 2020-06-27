import React, { useEffect, useState, useContext } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import ImageUploader from 'react-images-upload';
import Switch from "@material-ui/core/Switch";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import DropDownLayouts from "../lowLeveComponents/DropDownLayouts";
import RenderedPage from "../RenderedPage"
import RenderedCover from "../RenderedCover";
import Draggable from 'react-draggable';

import ThemesContext from "../../context/themesContext/themeContext"

import Renderer from "../Renderer"


const GeneralThemeFields = () => {

    const themeContext = useContext(ThemesContext)

    const [theme, setTheme] = useState({
        name: "",
        checkedIsCover: false,
        layoutUsed: "",
        textEdit: "",
        layoutEdit: "",
        backgroundEdit: "",
        themeImage: "",
        coverThemeImage: "",
        zoom: "",
        themesList: "",
        pageLayoutsList: "",
        coverLayoutsList: "",
        layoutForTheme: "",
        deltaPosition: 1

    })

    const { name,
        checkedIsCover,
        layoutUsed,
        textEdit,
        layoutEdit,
        backgroundEdit,
        themeImage,
        coverThemeImage,
        zoom,
        themesList,
        pageLayoutsList,
        coverLayoutsList,
        layoutForTheme,
        deltaPosition } = theme



    const {
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
    } = themeContext.layoutForTheme ? themeContext.layoutForTheme : ""


    const cov = themeContext.layouts.filter(l => l.tipLayout !== "Pagina")
    const pgs = themeContext.layouts.filter(l => l.tipLayout === "Pagina")

    const handleTextUpdate = (event) => {
        setTheme({ ...theme, [event.target.name]: event.target.value });
    };


    const handleChangeDropdown = (event) => {
        setTheme({
            ...theme,
            [event.target.name]: event.target.value,
        });
        themeContext.fetchLayoutsForId(event.target.value)
    };
    const handleChangeCheck = (event) => {
        setTheme({ ...theme, [event.target.name]: event.target.checked });
    };

    const showOnlyForCategory = (category) => {
        let conditionEval;

        if (themeContext.layoutForTheme === null &&
            themeContext.layoutForTheme === undefined &&
            themeContext.layoutForTheme === "") return;

        const categs = [...category];
        // conditionEval = categs.includes(themeContext.layoutForTheme.tipLayout);
        return conditionEval
    }

    const zoomOut = () => {
        setTheme({
            zoom: zoom + 0.1
        })
    }

    const zoomIn = () => {
        setTheme({
            zoom: zoom - 0.1
        })
    }

    const onDrop = (event) => {
        themeContext.postImageForTheme(event[0]);
    }
    const onDropCoverImage = (event) => {
        themeContext.postBackgroundImageForTheme(event[0]);

    }

    const handleDrag = (e, ui) => {
        const { x, y } = deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    const createNewThemeWithImage = (theme) => {
        theme.coverThemeImage = themeContext.coverThemeImage;
        themeContext.createNewTheme(theme);
    }


    const renderer = {
        width: `500px`,
        height: `600px`,
        background: "#f0f0f0",
        paddingTop: "100px",
        overflow: "hidden"
    }


    return (
        <Container
            direction="row"
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
                    createNewThemeWithImage(theme)
                }}
            >
                Creeaza
      </Button>

            <Grid container  >



                <Grid item xs={4}>
                    <TextField
                        id="standard-basic"
                        label="Denumeste tematica"
                        type="text"
                        onChange={(event) => handleTextUpdate(event)}
                        name="name"
                        value={name}
                    />

                    <br />
                    <br />

                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={checkedIsCover}
                                        onChange={(event) => handleChangeCheck(event)}
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
                        pageLayouts={(checkedIsCover === true) ? cov : pgs}
                        value={layoutUsed}
                        label="Alege layout pentru tematica"
                        name="layoutUsed"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />


                    <br />

                    <ImageUploader
                        label="Marime imagine max: 4MB se accepta doar .jpg, .png"
                        withIcon={false}
                        buttonText='Imagine background'
                        onChange={(event) => onDrop(event)}
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


                    {checkedIsCover && <ImageUploader
                        label="Marime imagine max: 4MB se accepta doar .jpg, .png"
                        withIcon={false}
                        buttonText='Imagine coperta'
                        onChange={(event) => onDropCoverImage(event)}
                        imgExtension={['.jpg', '.png']}
                        maxFileSize={5242880}
                        withPreview={true}
                        withLabel={false}
                        fileContainerStyle={{
                            padding: "0px",
                            alignItems: "flex-start",
                            margin: "10px auto"
                        }}
                    />}


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
                        zoom={1}
                        themeImage={themeContext.themeImage}
                        coverThemeImage={themeContext.coverThemeImage}
                        zoomOut={zoomOut}
                        zoomIn={zoomIn} />

                </Grid>
            </Grid>
        </Container >
    )
}

export default GeneralThemeFields
