import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid, CardContent, Typography, Divider, List, ListItem } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    title: {
        marginBottom: 12,
        fontSize: 20,
      },
});
function renderParents(parents) {


    {
        return(
            parents.map((parent,i)=><Typography key = {i++} variant="body2">{ i + "- " +parent.fName +" " + parent.lName}</Typography>)
        ) 
    }
}

function StudentProfile(props) {

    console.log(props)
  
    const { classes } = props;
    const {sInfo} = props
    return (
        <div>
            <Card raised>
            <CardContent>
            <Typography className={classes.title} color="textSecondary">
            Student Information
          </Typography>
                <List>
                <ListItem>
                <Typography variant="caption" align="left">
Student Name
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.fName + " " + sInfo.data.lName  }
                </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                <Typography variant="caption" align="left">
Student Number
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.studentNumber}
                </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                <Typography variant="caption" align="left">
Address
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.address.address1 + ", " + sInfo.data.address.address2 + ", " + sInfo.data.address.city + ", " + sInfo.data.address.state + ", " + sInfo.data.address.postalCode + ", " + sInfo.data.address.country}
                </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                <Typography variant="caption" align="left">
Date of Bith
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.dob}
                </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                <Typography variant="caption" align="left">
Current Grade
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.currGrade.grade.name + "- " + sInfo.data.currGrade.grade.description}
                </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                <Typography variant="caption" align="left">
Class Teacher
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {sInfo.data.currGrade.classTeacher.fName + " " + sInfo.data.currGrade.classTeacher.lName}
                </Typography>
                </ListItem>
                <Divider/>
                </List>
            </CardContent>
            <CardContent>
            <Typography className={classes.title} color="textSecondary">
            Parents Information
          </Typography>
          <ListItem>
                <Typography variant="caption" align="left">
Parent(s) Name(s)
                </Typography>
                </ListItem>
                <ListItem>
                <Typography variant="body2">
                {renderParents(sInfo.data.parents)}
                </Typography>
                </ListItem>
                <Divider/>
            </CardContent>
            </Card>   
        </div>
    );
  }

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentProfile);