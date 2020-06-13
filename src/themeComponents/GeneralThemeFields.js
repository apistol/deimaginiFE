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

import DropDownLayouts from "../components/lowLeveComponents/DropDownLayouts";
import RenderedPage from "../components/RenderedPage"
import RenderedCover from "../components/RenderedCover";
import Draggable from 'react-draggable';

import ThemesContext from "../context/themesContext/themeContext"


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
        layouts: "",
        returnedThemePrinAltTp: "",
        returnedLayoutThemePrinAltTp: "",

    })


    // TODO does not make update on useEffect
    useEffect(() => {
        const rt = themeContext.returnedLayoutThemePrinAltTp
            ? themeContext.returnedLayoutThemePrinAltTp : "";
        setTheme({
            ...theme, returnedLayoutThemePrinAltTp: { ...rt }
        })
    }, [themeContext])

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
        layouts,
        returnedThemePrinAltTp,
        returnedLayoutThemePrinAltTp, } = themeContext.returnedThemePrinAltTp ? { ...themeContext.returnedThemePrinAltTp } : theme



    const handleTextUpdate = (event) => {
        setTheme({ ...theme, [event.target.name]: event.target.value });
    };


    const handleChangeDropdown = (event) => {
        setTheme({
            ...theme,
            [event.target.name]: event.target.value,
        });
    };
    const handleChangeCheck = (event) => {
        setTheme({ ...theme, [event.target.name]: event.target.checked });
    };

    const showOnlyForCategory = (category) => {
        let conditionEval;

        console.log((themeContext.returnedLayoutThemePrinAltTp.tipLayout !== "" &&
            conditionEval === true) ? "este pagina" : "nu e pagina")

        if (themeContext.returnedLayoutThemePrinAltTp === null &&
            themeContext.returnedLayoutThemePrinAltTp === undefined &&
            themeContext.returnedLayoutThemePrinAltTp === "") return;

        const categs = [...category];

        conditionEval = categs.includes(themeContext.returnedLayoutThemePrinAltTp.tipLayout);
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
        setTheme({
            picture: event[0]
        });
    }
    const onDropCoverImage = (event) => {
        themeContext.postCoverImageForTheme(event[0]);
        setTheme({
            coverPicture: event[0]
        });
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


    const renderer = {
        width: `500px`,
        height: `600px`,
        background: "#f0f0f0",
        paddingTop: "100px",
        overflow: "hidden"
    }


    console.log(returnedLayoutThemePrinAltTp)
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
                    themeContext.createNewTheme(theme);
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
                        onChange={() => handleTextUpdate}
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
                                        onChange={() => handleChangeCheck}
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
                        pageLayouts={(checkedIsCover !== true) ? pageLayoutsList : coverLayoutsList}
                        value={layoutUsed}
                        label="Alege layout pentru tematica"
                        name="layoutUsed"
                        handleChangeDropdown={() => handleChangeDropdown}
                        getLayoutsForId={themeContext.getLayoutsForId}
                    />


                    <br />

                    <ImageUploader
                        label="Marime imagine max: 4MB se accepta doar .jpg, .png"
                        withIcon={false}
                        buttonText='Imagine background'
                        onChange={() => onDrop}
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
                        onChange={() => onDropCoverImage}
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

                                            {!returnedLayoutThemePrinAltTp &&


                                                <RenderedPage
                                                    tipLayout={returnedLayoutThemePrinAltTp.tipLayout}
                                                    rowsLayout={returnedLayoutThemePrinAltTp.rowsLayout}
                                                    layoutPadding={returnedLayoutThemePrinAltTp.layoutPadding}
                                                    layoutWidth={returnedLayoutThemePrinAltTp.layoutWidth}
                                                    layoutHeight={returnedLayoutThemePrinAltTp.layoutHeight}
                                                    row1={returnedLayoutThemePrinAltTp.row1}
                                                    row1Col1={returnedLayoutThemePrinAltTp.row1Col1}
                                                    row1Col2={returnedLayoutThemePrinAltTp.row1Col2}
                                                    row1Col3={returnedLayoutThemePrinAltTp.row1Col3}
                                                    row1Col4={returnedLayoutThemePrinAltTp.row1Col4}
                                                    row2={returnedLayoutThemePrinAltTp.row2}
                                                    row2Col1={returnedLayoutThemePrinAltTp.row2Col1}
                                                    row2Col2={returnedLayoutThemePrinAltTp.row2Col2}
                                                    row2Col3={returnedLayoutThemePrinAltTp.row2Col3}
                                                    row2Col4={returnedLayoutThemePrinAltTp.row2Col4}
                                                    row3={returnedLayoutThemePrinAltTp.row3}
                                                    row3Col1={returnedLayoutThemePrinAltTp.row3Col1}
                                                    row3Col2={returnedLayoutThemePrinAltTp.row3Col2}
                                                    row3Col3={returnedLayoutThemePrinAltTp.row3Col3}
                                                    row3Col4={returnedLayoutThemePrinAltTp.row3Col4}
                                                    row4={returnedLayoutThemePrinAltTp.row4}
                                                    row4Col1={returnedLayoutThemePrinAltTp.row4Col1}
                                                    row4Col2={returnedLayoutThemePrinAltTp.row4Col2}
                                                    row4Col3={returnedLayoutThemePrinAltTp.row4Col3}
                                                    row4Col4={returnedLayoutThemePrinAltTp.row4Col4}
                                                    themeImage={themeContext.returnedTheme !== null ? themeContext.returnedthemeImage : ""}
                                                // zoom={zoom} 
                                                />}
                                            {
                                                returnedLayoutThemePrinAltTp &&
                                                <RenderedPage layoutSpecs={returnedLayoutThemePrinAltTp} />
                                            }
                                        </div>}


                                    {showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&

                                        <div>

                                            {(returnedLayoutThemePrinAltTp === "") ?
                                                <RenderedCover
                                                    tipLayout={returnedLayoutThemePrinAltTp.tipLayout}
                                                    layoutWidth={returnedLayoutThemePrinAltTp.layoutWidth}
                                                    layoutHeight={returnedLayoutThemePrinAltTp.layoutHeight}
                                                    coverHasImage={returnedLayoutThemePrinAltTp.coverHasImage}
                                                    coverImageWidth={returnedLayoutThemePrinAltTp.coverImageWidth}
                                                    coverImageHeight={returnedLayoutThemePrinAltTp.coverImageHeight}
                                                    coverImageTopPosition={returnedLayoutThemePrinAltTp.coverImageTopPosition}
                                                    coverImageLeftPosition={returnedThemePrinAltTp.coverImageLeftPosition}
                                                    themeImage={themeContext.themeImage}
                                                    coverThemeImage={themeContext.coverThemeImage}
                                                // zoom={zoom} 
                                                /> : <RenderedCover pagesSpecs={{ ...returnedThemePrinAltTp }} />}
                                        </div>
                                    }
                                </div>
                            </div>
                        </Draggable>


                    </div>

                </Grid>
            </Grid>
        </Container >
    )
}

export default GeneralThemeFields
