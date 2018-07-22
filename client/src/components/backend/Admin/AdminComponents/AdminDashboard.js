import React from 'react'
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = {
    root : {
        height: '100%',
        width: '100%'
    }

}

function AdminDashboard(props) {
    console.log("Admin Dashboard")
    const {classes} = props;
    return(
        <div className={classes.root}>
    Admin Dashboard
    
        </div>
    )

}
export default withStyles(styles)(AdminDashboard)