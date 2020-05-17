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


import cover1 from "../assets/covers/Cover (1).png";
import cover2 from "../assets/covers/Cover (2).png";
import cover3 from "../assets/covers/Cover (3).png";
import cover4 from "../assets/covers/Cover (4).png";
import cover5 from "../assets/covers/Cover (5).png";
import cover6 from "../assets/covers/Cover (6).png";
import cover7 from "../assets/covers/Cover (7).png";
import cover8 from "../assets/covers/Cover (8).png";
import clasic1 from "../assets/clasic/Clasic (1).png";
import clasic2 from "../assets/clasic/Clasic (2).png";
import clasic3 from "../assets/clasic/Clasic (3).png";
import clasic4 from "../assets/clasic/Clasic (4).png";
import clasic5 from "../assets/clasic/Clasic (5).png";
import clasic6 from "../assets/clasic/Clasic (6).png";
import clasic7 from "../assets/clasic/Clasic (7).png";
import clasic8 from "../assets/clasic/Clasic (8).png";
import clasic9 from "../assets/clasic/Clasic (9).png";
import clasic10 from "../assets/clasic/Clasic (10).png";
import clasic11 from "../assets/clasic/Clasic (11).png";
import clasic12 from "../assets/clasic/Clasic (12).png";
import clasic13 from "../assets/clasic/Clasic (13).png";
import clasic14 from "../assets/clasic/Clasic (14).png";
import clasic15 from "../assets/clasic/Clasic (15).png";
import clasic16 from "../assets/clasic/Clasic (16).png";

const covers = [
    { imagePath: cover1, id: 1, checked: false },
    { imagePath: cover2, id: 2, checked: false },
    { imagePath: cover3, id: 3, checked: false },
    { imagePath: cover4, id: 4, checked: false },
    { imagePath: cover5, id: 5, checked: false },
    { imagePath: cover6, id: 6, checked: false },
    { imagePath: cover7, id: 7, checked: false },
    { imagePath: cover8, id: 8, checked: false },
];
const clasic = [
    { imagePath: clasic1, id: 1, checked: false },
    { imagePath: clasic2, id: 2, checked: false },
    { imagePath: clasic3, id: 3, checked: false },
    { imagePath: clasic4, id: 4, checked: false },
    { imagePath: clasic5, id: 5, checked: false },
    { imagePath: clasic6, id: 6, checked: false },
    { imagePath: clasic7, id: 7, checked: false },
    { imagePath: clasic8, id: 8, checked: false },
    { imagePath: clasic9, id: 9, checked: false },
    { imagePath: clasic10, id: 10, checked: false },
    { imagePath: clasic11, id: 11, checked: false },
    { imagePath: clasic12, id: 12, checked: false },
    { imagePath: clasic13, id: 13, checked: false },
    { imagePath: clasic14, id: 14, checked: false },
    { imagePath: clasic15, id: 15, checked: false },
    { imagePath: clasic16, id: 16, checked: false },
];


class NewTheme extends React.Component {
    state = {
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
        covers,
        clasic
    };

    componentDidMount() {

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
                margin: 1,
                width: "150px!important",
                height: "150px!important",
            },
        };
        const buttonColor = {
            backgroundColor: "#e14013!important",
            color: "#FFFFFF",
            marginTop: "30px",
        };
        const images = {
            width: "100%",
            height: "100%",
        };
        const cover = {
            padding: "20px",
        };
        const coverLayout = {
            border: "1px solid #000000",
            height: "150px",
            padding: "110px",
        };
        const imagePlaceHolder = {
            border: "1px solid #000000",
            background: "red",
            height: "100%",
        };
        const text = {
            textAlign: "center",
        };

        const imagesContainer = {
            padding: "10px",
        };

        const checked = {
            padding: "10px",
            boxShadow: "0px 0px 17px 0px rgba(225,64,19,1)",
        };


        let coperta =
            this.state.checkedHasCover === true ? (
                <div>
                    <div style={cover}>
                        <div style={coverLayout}>
                            <div style={imagePlaceHolder}>1</div>
                        </div>
                    </div>
                    <p style={text}>Coperta</p>
                </div>
            ) : (
                    ""
                );


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
                                style={{
                                    // display: checkedHasCover === true ? "inherit" : "none",
                                }}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={heading}>Layout-uri de coperta</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div style={papers}>
                                        {covers.map((cover) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={6}
                                                    style={
                                                        cover.id === this.state.selectedCover
                                                            ? checked
                                                            : imagesContainer
                                                    }
                                                    key={cover.id}
                                                    onClick={() => {
                                                        this.handleSelectedCover(cover.id);
                                                    }}
                                                >
                                                    <Paper elevation={4}>
                                                        <img
                                                            src={cover.imagePath}
                                                            style={images}
                                                            alt="media"
                                                        />
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
                                    <Typography style={heading}>Layout-uri de pagina</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div style={papers}>
                                        {clasic.map((c) => {
                                            return (
                                                <Grid item xs={6} style={imagesContainer} key={c.id}>
                                                    <Paper elevation={3}>
                                                        <img src={c.imagePath} style={images} alt="media" />
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

export default NewTheme;
