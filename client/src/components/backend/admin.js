import { withStyles } from "@material-ui/core";
import React from "react";
import Sidenav from "./bckcomponents/sidenav";

const styles = themes=>{

}
class Admin extends React.Component {

    render(){
        return(
            <div> <Sidenav/> </div>
        )
    }
}
export default withStyles(styles)(Admin)