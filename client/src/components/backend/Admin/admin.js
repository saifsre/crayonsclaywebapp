import { withStyles } from "@material-ui/core";
import React from "react";
import SideNav from '../Dashboard/sidenav';
const styles = themes=>{

}
class Admin extends React.Component {

    render(){
        return(
            <div> <SideNav/></div>
        )
    }
}
export default withStyles(styles)(Admin)