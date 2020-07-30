import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import logo from "../assets/logo.svg";
import m1 from "../assets/cardMenu/m1.png";
import m2 from "../assets/cardMenu/m2.png";
import m4 from "../assets/cardMenu/m4.png";
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class Navigation extends React.Component {
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
      <Container style={{ marginBottom: "50px" }}>
        <Grid container spacing={3} style={{ marginBottom: "50px" }}>
          <Grid item xs={4}></Grid>
          <Grid
            item
            xs={4}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img src={logo} alt="Logo editor deImagini" />
            <Divider />
            <p>
              {this.props.projectName !== ""
                ? this.props.projectName
                : "Album Foto"}
            </p>
          </Grid>
          <Grid item xs={4} container justify="flex-end" alignItems="center">

          </Grid>
        </Grid>

        <Grid container className="cardMenu" spacing={2}>
          <Grid item xs={12} md={4}>
            <Link to="/">
              <Paper style={card} className="menuCard">
                <img src={m1} style={image} alt="creeaza proiect" />
                <h3 style={textCenter}>Creeaza proiect</h3>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link to="/creeazaLayout">
              <Paper style={card} className="menuCard">
                <img src={m2} style={image} alt="creeaza layout" />
                <h3 style={textCenter}>Creeaza layout</h3>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link to="/creeazaProdusComplet">
              <Paper style={card} className="menuCard">
                <img src={m4} style={image} alt="creeaza produs" />
                <h3 style={textCenter}>Produs complet</h3>
              </Paper >
            </Link>
          </Grid >
        </Grid >
      </Container>
    );
  }
}

export default Navigation;
