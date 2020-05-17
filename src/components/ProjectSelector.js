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
  modelProperty: {
    margin: "0px",
    textAlign: "left",
  },
  cardShadow: {
    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.75)",
    marginBottom: "30px",
  },
}));

export default function SimpleTabs({
  productChecked,
  selectedModel,
  models
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
              {models.map((model) => {
                return (
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    item
                    key={Math.round(Math.random() * 1000)}
                    className={classes.cardShadow}
                    onClick={() => productChecked(model.modelId)}
                    style={{
                      background:
                        selectedModel !== ""
                          ? selectedModel.modelId === model.modelId
                            ? "#ff896e"
                            : "inherit"
                          : "inherit",
                    }}
                  >
                    <Grid item xs={4}>
                      <img
                        src={model.imageUrl}
                        alt="testImage"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <p className={classes.modelProperty}>
                        Denumire album: {model.name}
                      </p>
                      <p className={classes.modelProperty}>
                        Are coperta:
                        {model.checkedHasCover === true ? "Da" : "Nu"}
                      </p>
                      <p className={classes.modelProperty}>
                        Latime coperta: {model.coverWidth}
                      </p>
                      <p className={classes.modelProperty}>
                        Inaltime coperta: {model.coverHeight}
                      </p>
                      <p className={classes.modelProperty}>
                        Latime pagina: {model.pageWidth}
                      </p>
                      <p className={classes.modelProperty}>
                        Inaltime pagina: {model.pageHeight}
                      </p>
                      <p className={classes.modelProperty}>
                        Tip hartie: {model.tipHartie}
                      </p>
                      <p className={classes.modelProperty}>
                        Pret ron: {model.pretRon}
                      </p>
                      <p className={classes.modelProperty}>
                        {" "}
                        {model.pretDolari !== ""
                          ? `Pret dolari: ${model.pretDolari}`
                          : ""}
                      </p>
                      <p className={classes.modelProperty}>
                        {model.pretEuro !== ""
                          ? `Pret euro: ${model.pretEuro}`
                          : ""}
                      </p>
                      <p className={classes.modelProperty}>
                        {model.discount !== ""
                          ? `Discount: ${model.discount}`
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
              })}
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
