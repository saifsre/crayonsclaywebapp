import {Route} from 'react-router';
import StudentView from './StudentView';
import React from 'react'
import StudentExams from "./StudentComponents/StudentExams"
import StudentProfile from "./StudentComponents/StudentProfile"
const routes = 
<div>
<Route path="/student/:studentid/dashboard" component={StudentView}></Route>
<Route path="/student/:studentid/exams" component={StudentView}></Route>
<Route path="/student/:studentid/profile" component={StudentView}></Route> 
</div>

export default routes;