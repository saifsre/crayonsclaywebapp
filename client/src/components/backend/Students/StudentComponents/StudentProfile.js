import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid, CardContent, Typography, Divider, List, ListItem } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    
});

function StudentProfile(props) {

    console.log(props)
  
    const { classes } = props;
    const {sInfo} = props
    return (
        <div>
            <Card raised>
            <CardContent>
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
                {props.studentdob}
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
                {props.currgrade}
                </Typography>
                </ListItem>
                <Divider/>
                </List>
            </CardContent>
            
            </Card>   
        </div>
    );
  }

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentProfile);