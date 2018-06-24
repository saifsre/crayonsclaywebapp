import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: { 
    margin: theme.spacing.unit,
  }
});

function AdvancedSearch(props) {
  const { classes } = props;
  console.log(props)
   function handleClick() {
 
  }

  return ( 
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField autoFocus fullWidth label={props.field1} />
        </Grid>
        <Grid item xs={6} sm={3}>
        <TextField fullWidth label={props.field2} />
        </Grid>
        <Grid item xs={6} sm={3}>
        <TextField fullWidth label={props.field3}/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <TextField fullWidth label={props.field3}/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Button onClick= {handleClick}variant="contained" color="primary" className={classes.button}> Search </Button>
        </Grid>
      </Grid>
    </div> 
  );
}

AdvancedSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedSearch);