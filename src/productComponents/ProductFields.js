import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ProductContext from "../context/productContext/productContext"


const ProductFields = props => {


    const [productFields, setProductFields] = useState({
        pages: [],
        covers: [],
        themes: [],
        projects: [],

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
        layoutC3: "",
    }
    )

    const productsContextType = useContext(ProductContext);


    const handleChange = (event) => {
        setProductFields({ [event.target.name]: event });
    };
    const handleChangeDropdown = (event) => {
        setProductFields({ layoutC1C4: event });
    };



    const root = {
        width: "100%",
    };
    const heading = {
        fontSize: 20,
        fontWeight: 100,
    };
    const papers = {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: 2,
            width: "150px!important",
            height: "150px!important",
        },
    };

    const paper = {
        padding: "10px",
        margin: "10px",
        height: "190px!important",
        width: "190px!important",
        overflow: "hidden",

    };

    const images = {
        width: "100%",
        height: "100%",
        margin: "20px 0"
    };
    const imagesContainer = {
        padding: "10px",
    };

    const checked = {
        padding: "10px",
        boxShadow: "0px 0px 17px 0px rgba(225,64,19,1)",
    };


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
                    //projectContextType.handleCreateNewProject(productFields);
                }}
            >
                Salveaza produs
                </Button>

            <Grid container spacing={3}>
                <Grid item xs={12}>



                    <div style={root}>
                        <ExpansionPanel
                        >
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={heading}>Layout-uri de pagina</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div style={papers}>
                                    {/* {layoutsContextType.layoutsList.filter(l => l.tipLayout === "Pagina").map((page) => {
                                        return (
                                            <Grid
                                                item
                                                xs={6}

                                                key={page.id}

                                            >
                                                <Paper elevation={4} style={paper} className="hoveredComponent"
                                                    onClick={() => props.handleAlbumElementPush(page.id, "Pages")}
                                                >
                                                    <img
                                                        src={defaultImage}
                                                        style={images}
                                                        alt="media"
                                                    />
                                                    <p>Name: {page.name}</p>
                                                    <p>Tip layout: {page.tipLayout}</p>
                                                </Paper>
                                            </Grid>
                                        );
                                    })} */}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={heading}>Layout-uri de coperta</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div style={papers}>
                                    {/* {layoutsContextType.layoutsList.map((cover) => {
                                        return (
                                            <Grid
                                                item
                                                xs={6}

                                                key={cover.id}

                                            >
                                                <Paper elevation={4} style={paper} className="hoveredComponent" onClick={() => props.handleComponentPush(cover.id, "Cover")}>
                                                    <img
                                                        src={defaultImage}
                                                        style={images}
                                                        alt="media"
                                                    />
                                                    <p>Name: {cover.name}</p>
                                                    <p>Tip layout: {cover.tipLayout}</p>
                                                </Paper>
                                            </Grid>
                                        );
                                    })} */}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={heading}>Tematici</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div style={papers}>
                                    {/* {themesContextType.themes ? themesContextType.themes.map((theme) => {
                                        return (
                                            <Grid
                                                item
                                                xs={6}

                                                key={theme.id}

                                            >
                                                <Paper elevation={4} style={paper} className="hoveredComponent" onClick={() => props.handleComponentPush(theme.id, "Theme")}>
                                                    <img
                                                        src={theme.themeImage}
                                                        style={images}
                                                        alt="media"
                                                    />
                                                    <p>Name: {theme.name}</p>
                                                    <p>Layout folosit: {theme.layoutUsed}</p>
                                                </Paper>
                                            </Grid>
                                        );
                                    }) : ""} */}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={heading}>Proiecte</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div style={papers}>
                                    {/* {projectsContextType.projectsList ? projectsContextType.projectsList.map((project) => {
                                        return (
                                            <Grid
                                                item
                                                xs={6}

                                                key={project.modelId}

                                            >
                                                <Paper elevation={4} style={paper} className="hoveredComponent">
                                                    <img
                                                        src={project.imageUrl}
                                                        style={images}
                                                        alt="media"
                                                    />
                                                    <p>Name: {project.name}</p>
                                                    <p>Layout folosit: {project.layoutUsed}</p>
                                                </Paper>
                                            </Grid>
                                        );
                                    }) : ""} */}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>


                    </div>
                    <p>Alege copertile ale caror layout este editabil</p>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.layoutEditC1} onChange={handleChange} name="layoutEditC1" />}
                            label="C1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.layoutEditC2} onChange={handleChange} name="layoutEditC2" />}
                            label="C2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.layoutEditC3} onChange={handleChange} name="layoutEditC3" />}
                            label="C3"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.layoutEditC4} onChange={handleChange} name="layoutEditC4" />}
                            label="C4"
                        />
                    </FormGroup>
                    <br />

                    <p>Alege copertile ale caror text este editabil</p>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.textEditC1} onChange={handleChange} name="textEditC1" />}
                            label="C1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.textEditC2} onChange={handleChange} name="textEditC2" />}
                            label="C2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.textEditC3} onChange={handleChange} name="textEditC3" />}
                            label="C3"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.textEditC4} onChange={handleChange} name="textEditC4" />}
                            label="C4"
                        />
                    </FormGroup>
                    <br />

                    <p>Alege copertile ale caror background este editabil</p>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.backgroundEditC1C4} onChange={handleChange} name="backgroundEditC1C4" />}
                            label="C1 si C4"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.backgroundEditC2} onChange={handleChange} name="backgroundEditC2" />}
                            label="C2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={productFields.backgroundEditC3} onChange={handleChange} name="backgroundEditC3" />}
                            label="C3"
                        />
                    </FormGroup>
                    <br />

                </Grid>


            </Grid>
        </Container >
    );
}

export default ProductFields;
