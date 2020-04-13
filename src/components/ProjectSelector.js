import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import products from '../data';
import '../App.css';

function TabPanel(props) {

    const { children, value, index, ...other} = props;



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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function SimpleTabs({productChecked, selectedItem}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

        <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"#e14013" , color:"#FFF"}}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Printuri" {...a11yProps(0)}/>
            <Tab label="Calendare" {...a11yProps(1)}/>
            <Tab label="Carti" {...a11yProps(2)}/>
            <Tab label="Cadouri" {...a11yProps(3)}/>
            <Tab label="Wall art" {...a11yProps(4)}/>
            <Tab label="Decor" {...a11yProps(5)}/>
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}>


            <React.Fragment>
            {
                products.map( product => {
                    return <Grid item xs={4}  key={product.id}>
                        <Paper className={classes.paper} 
                               id={(selectedItem === product.id) ? "transparentBackground" : ""} 
                               onClick={()=>{productChecked(product.id)}}
                              >
                            <img src={product.imageUrl} alt="testImage"/>
                            <p>{product.description}</p>
                            <p>Pret: {product.price}RON</p>
                        </Paper>
                    </Grid>
                })
            }
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

  );
}
