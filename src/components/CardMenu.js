import React, { Component } from "react";
import m1 from "../assets/cardMenu/m1.png";
import m2 from "../assets/cardMenu/m2.png";
import m3 from "../assets/cardMenu/m3.png";
import m4 from "../assets/cardMenu/m4.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class CardMenu extends Component {
  render() {
    const image = {
      display: "block",
      margin: "0 auto",
    };
    const marginBottom = {
      marginBottom: "40px",
    };
    const textCenter = {
      textAlign: "center",
    };
    const card = {
      paddingBottom: "20px",
    };
    return (

      <Container style={marginBottom}>
        <Grid container className="cardMenu" spacing={2}>
          <Grid item xs={12} md={3}>
            <Link to="/">
              <Paper style={card} className="menuCard">
                <img src={m1} style={image} alt="creeaza proiect" />
                <h3 style={textCenter}>Creeaza proiect</h3>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/creeazaLayout">
              <Paper style={card} className="menuCard">
                <img src={m2} style={image} alt="creeaza layout" />
                <h3 style={textCenter}>Creeaza layout</h3>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/creeazaTematica">
              <Paper style={card} className="menuCard">
                <img src={m3} style={image} alt="creeaza tematica" />
                <h3 style={textCenter}>Creeaza tematica</h3>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/creeazaProdusComplet">
              <Paper style={card} className="menuCard">
                <img src={m4} style={image} alt="creeaza produs" />
                <h3 style={textCenter}>Produs complet</h3>
              </Paper >
            </Link>
          </Grid >
        </Grid >
      </Container >

    );
  }
}

export default CardMenu;
