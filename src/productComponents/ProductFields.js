import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import defaultImage from "../assets/logo.svg";


class ProductFields extends React.Component {
    state = {

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
    };

    componentDidMount() {
        const pages = this.props.layouts.filter(l => l.tipLayout === "Pagina");
        const covers = this.props.layouts.filter(l => l.tipLayout !== "Pagina");
        const themes = this.props.themes;
        const projects = this.props.projects;

        this.setState({
            pages,
            covers,
            themes,
            projects
        })
    }

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event });
    };
    handleChangeDropdown = (event) => {
        this.setState({ layoutC1C4: event });
    };

    render() {

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
                        this.props.handleCreateNewProject(this.state);
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
                                        {this.state.pages.map((page) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={6}

                                                    key={page.id}

                                                >
                                                    <Paper elevation={4} style={paper} className="hoveredComponent" onClick={() => this.props.handleComponentPush(page.id, "Pages")}>
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
                                        })}
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
                                        {this.state.covers.map((cover) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={6}

                                                    key={cover.id}

                                                >
                                                    <Paper elevation={4} style={paper} className="hoveredComponent" onClick={() => this.props.handleComponentPush(cover.id, "Cover")}>
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
                                        })}
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
                                        {this.state.themes.map((theme) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={6}

                                                    key={theme.id}

                                                >
                                                    <Paper elevation={4} style={paper} className="hoveredComponent" onClick={() => this.props.handleComponentPush(theme.id, "Theme")}>
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
                                        })}
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
                                        {this.state.projects.map((project) => {
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
                                        })}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>


                        </div>
                        <p>Alege copertile ale caror layout este editabil</p>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.layoutEditC1} onChange={this.handleChange} name="layoutEditC1" />}
                                label="C1"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.layoutEditC2} onChange={this.handleChange} name="layoutEditC2" />}
                                label="C2"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.layoutEditC3} onChange={this.handleChange} name="layoutEditC3" />}
                                label="C3"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.layoutEditC4} onChange={this.handleChange} name="layoutEditC4" />}
                                label="C4"
                            />
                        </FormGroup>
                        <br />

                        <p>Alege copertile ale caror text este editabil</p>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.textEditC1} onChange={this.handleChange} name="textEditC1" />}
                                label="C1"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.textEditC2} onChange={this.handleChange} name="textEditC2" />}
                                label="C2"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.textEditC3} onChange={this.handleChange} name="textEditC3" />}
                                label="C3"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.textEditC4} onChange={this.handleChange} name="textEditC4" />}
                                label="C4"
                            />
                        </FormGroup>
                        <br />

                        <p>Alege copertile ale caror background este editabil</p>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.backgroundEditC1C4} onChange={this.handleChange} name="backgroundEditC1C4" />}
                                label="C1 si C4"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.backgroundEditC2} onChange={this.handleChange} name="backgroundEditC2" />}
                                label="C2"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.backgroundEditC3} onChange={this.handleChange} name="backgroundEditC3" />}
                                label="C3"
                            />
                        </FormGroup>
                        <br />

                    </Grid>


                </Grid>
            </Container >
        );
    }
}

export default ProductFields;
