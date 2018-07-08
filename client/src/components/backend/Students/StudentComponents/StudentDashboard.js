import React from 'react'
import { withStyles, Divider, Card, CardHeader, CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

function StudentDashboard (props) {
 const {classes} = props; 
    return (
        // {/* <Paper >
        // <Typography variant="headline">
        // Welcome {props.name} !
        // </Typography>
        // <Divider/>
        // <Card>
        //     <CardContent>
        //     <Typography variant="headline"> Latest News </Typography>
        //     </CardContent>
        // </Card>

        // </Paper> */}
      
        <div className={classes.root}>
        <Paper>
      <Grid container spacing={24}>
      <Grid item xs={12}>
          <Paper className={classes.paper}> <Typography variant="headline" align="left">Welcome Saif!</Typography></Paper>
        </Grid>
        <Grid item xs>
          <Card> </Card>
        </Grid>
        <Grid item xs>
        <Card> a</Card>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
        <Card> a</Card>
        </Grid>
        <Grid item xs={6}>
        <Card>a </Card>
        </Grid>
        <Grid item xs>
        <Card>a </Card>
        </Grid>
      </Grid>
      </Paper>
    </div>

    )
}
export default withStyles(styles)(StudentDashboard)