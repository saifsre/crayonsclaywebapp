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

function AdminPaystubs(props) {
    const {classes} = props;
    console.log("Admin PayStubs")

    return(
        <div className={classes.root}>
    Admin Paystubs
        </div>
    )

}
export default withStyles(styles)(AdminPaystubs)