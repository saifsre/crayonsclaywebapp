import {Route} from 'react-router';
import Admin from './admin';
import React from 'react';
const AdminRoute = 
<div>
<Route path="/admin/teachers" component={Admin}></Route>
<Route path="/admin/students" component={Admin}></Route>
<Route path="/admin/paystubs" component={Admin}></Route>
<Route path="/admin/exams" component={Admin}></Route>
<Route path="/admin/dashboard" component={Admin}></Route>
<Route path="/admin/settings" component={Admin}></Route>

</div>
export default AdminRoute;