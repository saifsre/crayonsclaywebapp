import {Route} from 'react-router';
import StudentView from './StudentView';
import React from 'react'
const StudentRoutes = 
<Route>
<Route path="/student/:studentid/dashboard" component={StudentView}></Route>
<Route path="/student/:studentid/exams" component={StudentView}></Route>
<Route path="/student/:studentid/profile" component={StudentView}></Route> 
<Route path="/student/:studentid/profile" component={StudentView}></Route> 
<Route path="/student/:studentid/settings" component={StudentView}></Route> 
</Route>
export default StudentRoutes;