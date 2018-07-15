import { withStyles } from "@material-ui/core";
import React from "react";
import SideNav from '../Dashboard/sidenav';
import {TopList, BottomList} from './tileData'
const styles = themes=>{

}
class Admin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            studentInfo : null,
            components: []
          }
    }
    render(){
        return(
            <div> 
        <SideNav url = {this.props.match.url} comps={this.state.components} topList= {<TopList />} bottomList={<BottomList/>}/>

        </div>
        )
    }
}
export default withStyles(styles)(Admin)