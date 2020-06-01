import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "../App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  projectProperty: {
    margin: "0px",
    textAlign: "left",
  },
  cardShadow: {
    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.75)",
    marginBottom: "30px",
  },
}));

export default function SimpleTabs({
  projects
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#e14013", color: "#FFF" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Albume" {...a11yProps(0)} />
            <Tab label="Calendare" {...a11yProps(1)} />
            <Tab label="Carti" {...a11yProps(2)} />
            <Tab label="Cadouri" {...a11yProps(3)} />
            <Tab label="Wall art" {...a11yProps(4)} />
            <Tab label="Decor" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <React.Fragment>
              {(projects !== null) ? (projects.map((project) => {
                return (
                  <Grid
                    key={project.modelId}
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    item
                    className={classes.cardShadow}
                  >
                    <Grid item xs={4}>
                      <img
                        src={project.imageUrl}
                        alt="testImage"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <p className={classes.projectProperty}>
                        Denumire album: {project.name}
                      </p>
                      <p className={classes.projectProperty}>
                        Are coperta:
                        {project.checkedHasCover === true ? "Da" : "Nu"}
                      </p>
                      <p className={classes.projectProperty}>
                        Latime coperta: {project.coverWidth}
                      </p>
                      <p className={classes.projectProperty}>
                        Inaltime coperta: {project.coverHeight}
                      </p>
                      <p className={classes.projectProperty}>
                        Latime pagina: {project.pageWidth}
                      </p>
                      <p className={classes.projectProperty}>
                        Inaltime pagina: {project.pageHeight}
                      </p>
                      <p className={classes.projectProperty}>
                        Tip hartie: {project.tipHartie}
                      </p>
                      <p className={classes.projectProperty}>
                        Pret ron: {project.pretRon}
                      </p>
                      <p className={classes.projectProperty}>
                        {" "}
                        {project.pretDolari !== ""
                          ? `Pret dolari: ${project.pretDolari}`
                          : ""}
                      </p>
                      <p className={classes.projectProperty}>
                        {project.pretEuro !== ""
                          ? `Pret euro: ${project.pretEuro}`
                          : ""}
                      </p>
                      <p className={classes.projectProperty}>
                        {project.discount !== ""
                          ? `Discount: ${project.discount}`
                          : ""}
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#e14013", color: "#FFF" }}
                        onClick={() => {
                          this.props.updateProject();
                        }}
                      >
                        Editeaza album
                      </Button>
                      <br /> <br />
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#e14013", color: "#FFF" }}
                        onClick={() => {
                          this.props.updateProject();
                        }}
                      >
                        Sterge album
                      </Button>
                      <br /> <br />
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#e14013", color: "#FFF" }}
                        onClick={() => {
                          this.props.updateProject();
                        }}
                      >
                        Duplica album
                      </Button>
                    </Grid>
                  </Grid>
                );
              })) : ""}
            </React.Fragment>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
      </div>
    </Container>
  );
}
