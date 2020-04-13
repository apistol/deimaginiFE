import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import OpenMenu from './navigationComponents/OpenMenu';

class Navigation extends React.Component {



    render(){
    return (
        <Fragment>
             <Grid container spacing={3}>
                <Grid item xs={4}>

                   
                </Grid>
                <Grid item xs={4} container  direction="column" justify = "center" alignItems="center">
                    <Typography variant="h5">Fotocarte</Typography>
                    <Divider />
                    <p>
                        { this.props.projectName !== "" ? this.props.projectName : "Album Foto"}
                    </p> 
                </Grid>
                <Grid item xs={4} container justify = "flex-end" alignItems="center">
                    <OpenMenu/>
                </Grid>
            </Grid>
        </Fragment>
    )}
}

export default Navigation
