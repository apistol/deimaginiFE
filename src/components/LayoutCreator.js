import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


class LayoutCreator extends React.Component {
  state = {

  };


  render() {

    return (
      <Container>
        <Grid container>
          <Grid item xs={8}>

          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LayoutCreator;
