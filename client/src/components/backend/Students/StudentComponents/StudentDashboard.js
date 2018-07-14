import React from 'react'
import { withStyles, Divider, Card, CardHeader, CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
      width: '100%',
      overflow: 'auto'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    avatar: {
      backgroundColor: '#3f51b5'
    },
    header : {
      fontWeight: 'bold',
      color: '#3f51b5'
    }
  });

function StudentDashboard (props) {
 const {classes} = props; 
 const {sInfo} = props;
 var avName = sInfo.fName.charAt(0) + sInfo.lName.charAt(0);
 console.log(sInfo);
    return (
        <div className={classes.root}>
        <Card raised>
      <Grid container spacing={24}>
      <Grid item xs={12}>
          <Card raised className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} aria-label="Student" className={classes.avatar}>
                {avName}
              </Avatar>
            }
            title={<Typography className = {classes.header} variant="display1"> Welcome {sInfo.fName + " " + sInfo.lName} !</Typography>}
          />
            {/* <Typography variant="headline" align="left">Welcome {sInfo.fName + " " + sInfo.lName}!
           </Typography>  */}
           </Card>
        </Grid>
        <Grid item xs>
          <Card raised>
          <CardHeader title={<Typography className = {classes.header} variant="caption">Your Average</Typography>}/> 
            <CardContent>
               
            </CardContent></Card>
        </Grid>
        <Grid item xs>
        <Card raised> 
        <CardHeader title={<Typography className = {classes.header} variant="caption">Upcoming Exam</Typography>}/> 
         <CardContent>
            
        </CardContent></Card>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
        <Card raised>          
          <CardHeader title={<Typography className = {classes.header} variant="caption">Club Name</Typography>}/> 
         <CardContent>
             
          </CardContent></Card>
        </Grid>
        <Grid item xs={6}>
        <Card raised>
        <CardHeader title={<Typography className = {classes.header} variant="caption">Reminder</Typography>}/> 
         <CardContent>
            
        </CardContent> </Card>
        </Grid>
        <Grid item xs>
        <Card raised> 
        <CardHeader title={<Typography className = {classes.header} variant="caption">Upcoming Event</Typography>}/> 
        <CardContent>
           
        </CardContent></Card>
        </Grid>
      </Grid>
      </Card>
    </div>

    )
}
export default withStyles(styles)(StudentDashboard)