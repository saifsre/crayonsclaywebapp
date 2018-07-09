import React, { Fragment } from 'react'
import AdvancedSearch from '../extras/AdvancedSearch';
import { withStyles } from '@material-ui/core/styles';
import StudentProfile from './StudentComponents/StudentProfile';
import StudentDashboard from './StudentComponents/StudentDashboard';
import SideNav from '../Dashboard/sidenav'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import SchoolIcon from '@material-ui/icons/School';
import StudentExams from './StudentComponents/StudentExams';
import axios from 'axios'

const styles ={

}

const TopList = (props)=>(
    <div>
      <ListItem button component="a" href={`/student/${props.studentid}/dashboard`}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component="a" href={`/student/${props.studentid}/profile`}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button component="a" href={`/student/${props.studentid}/exams`}>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Exams" />
      </ListItem>
    </div>
  );
  
  const BottomList = (props)=>(
    <div>
      <ListItem button component="a" href={`/student/${props.studentid}/exams`}> 
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </div>
  )

class StudentView extends React.Component{

   components = []
    studentInfo() {
    }

   componentDidMount(){ 
    axios.get(`http://localhost:4000/api/students/${this.paramId}`).then(response=>{
      console.log(response.data);
      var courses =  [];
      var examsResults = response.data.examsResults;

      for(let i=0; i <examsResults.length; i++) {
        courses.push(examsResults[i].exam.course.name)
      }
      this.setState(
        {
          studentInfo: response.data,
          components: [
            {
                component: <StudentDashboard/>,
                link: `/student/${this.paramId}/dashboard`
            },
            {
                component: <StudentProfile sInfo={response}/>,
                link: `/student/${this.paramId}/profile`
            },
            {
                component: <StudentExams eInfo={courses}/>,
                link: `/student/${this.paramId}/exams`
            }
          ]
        })

      }
    ).catch(function(error){
          console.log(error)
      })
    }
   paramId = null;
   components = null;
   constructor(props){
       super(props);
       this.state = {
         studentInfo : null,
         components: []
       }
       this.paramId = this.props.match.params.studentid;
       
   }  
   


    render(){
        return(
            <div>
                <SideNav url = {this.props.match.url} comps={this.state.components} topList= {<TopList studentid={this.paramId}/>} bottomList={<BottomList studentid={this.paramId}/>}/>
            </div>
        )
    }
}

export default withStyles(styles)(StudentView);