import React, { Fragment } from 'react'
import AdvancedSearch from '../extras/AdvancedSearch';
import { withStyles } from '@material-ui/core/styles';


const styles ={

}

function StudentView (props) {
    
    function handleClick() {
        console.log("Parent")
  }

    return ( 
         <div>
             
         </div> 
    )
}

export default withStyles(styles)(StudentView);