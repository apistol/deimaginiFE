import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import model1 from '../assets/model1.png'
import model2 from '../assets/model2.png'
import model3 from '../assets/model3.png'
import model4 from '../assets/model4.png'
import model5 from '../assets/model5.png'
import model6 from '../assets/model6.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
    heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    },
    papers: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    },
    buttonColor:{
        backgroundColor:"#e14013!important",
        color:"#FFFFFF",
        marginTop: "30px"
    }
  }));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }

function BookFlipPage ({modelChecked}) {
    const classes = useStyles();

    return (
        
        <Grid container>
            <Grid item xs={8}>
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={"https://via.placeholder.com/400x200"} alt="Slider1" />
                            <p>coperta</p>
                        </div>
                        <div>
                            <img src={"https://via.placeholder.com/400x200"} alt="Slider1" />
                            <p>page slot default</p>
                        </div>
                        <div>
                            <img src={"https://via.placeholder.com/400x200"} alt="Slider1" />
                            <p>page slot default</p>
                        </div>
                        <div>
                            <img src={"https://via.placeholder.com/400x200"} alt="Slider1" />
                            <p>page slot default</p>
                        </div>
                    </Slider>
                </div>
            </Grid>
            <Grid item xs={4}>

            <div className={classes.root}>


                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Optiuni coperta</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    
                        options

                    </ExpansionPanelDetails>
                </ExpansionPanel>



                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Adauga un template de pagina</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    
                        <div className={classes.papers}>
                            
                            <Paper elevation={3} >
                                <img src={model1} alt="media"/>
                            </Paper>
                            <Paper elevation={3} >
                                <img src={model2} alt="media"/>
                            </Paper>
                            <Paper elevation={3} >
                                <img src={model3} alt="media"/>
                            </Paper>
                            <Paper elevation={3} >
                                <img src={model4} alt="media"/>
                            </Paper>
                            <Paper elevation={3} >
                                <img src={model5} alt="media"/>
                            </Paper>
                            <Paper elevation={3} >
                                <img src={model6} alt="media"/>
                            </Paper>
                        </div>

                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <Button variant="contained" className={classes.buttonColor} onClick={ ()=>{ modelChecked() }}>
                    Salveaza selectii
                </Button>
                    
                </div>



            </Grid>
      </Grid>

    );}

export default BookFlipPage
