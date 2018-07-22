import { withStyles } from "@material-ui/core";
import React from "react";
import SideNav from '../Dashboard/sidenav';
import {TopList, BottomList} from './tileData'
import AdminDashboard from './AdminComponents/AdminDashboard'
import AdminExams from './AdminComponents/AdminExams'
import AdminPaystubs from './AdminComponents/AdminPayStubs'
import AdminSettings from './AdminComponents/AdminSettings'
import AdminStudents from './AdminComponents/AdminStudents'
import AdminTeachers from './AdminComponents/AdminTeachers'
import axios from 'axios'
const styles = themes=>{

}
class Admin extends React.Component {
    componentDidMount(){ 
        // axios.get(`http://localhost:4000/api/admin`).then(response=>{
        //   this.setState(
        //     {
        //       adminInfo: response.data,
        //       components:[
        //         {
        //             component: <AdminDashboard />,
        //             link: `/admin/dashboard`
        //         },
        //         {
        //             component: <AdminExams/>,
        //             link: `/admin/profile`
        //         },
        //         {
        //             component: <AdminStudents />,
        //             link: `/admin/exams`
        //         },
        //         {
        //             component: <AdminSettings />,
        //             link: `/admin/exams`
        //         },
        //         {
        //             component: <AdminTeachers/>,
        //             link: `/admin/exams`
        //         },
        //         {
        //             component: <AdminPaystubs/>,
        //             link: `/admin/exams`
        //         }
        //       ]
        //     })
    
        //   }
        // ).catch(function(error){
        //       console.log(error)
        //   })
        }
        paramId = null
    constructor(props){
        super(props);
        this.state = {
            adminInfo : null,
            components:[
                {
                    component: <AdminDashboard />,
                    link: `/admin/dashboard`
                },
                {
                    component: <AdminExams/>,
                    link: `/admin/exams`
                },
                {
                    component: <AdminStudents />,
                    link: `/admin/students`
                },
                {
                    component: <AdminSettings />,
                    link: `/admin/settings`
                },
                {
                    component: <AdminTeachers/>,
                    link: `/admin/teachers`
                },
                {
                    component: <AdminPaystubs/>,
                    link: `/admin/paystubs`
                }
              ]
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