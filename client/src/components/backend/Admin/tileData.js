
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteIcon from '@material-ui/icons/Note';
import StarIcon from '@material-ui/icons/Star';
import AssistantIcon from '@material-ui/icons/Assistant';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import SchoolIcon from '@material-ui/icons/School';

export const TopList=(props)=>(
  <div>
    <ListItem component="a" button href={`/admin`}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem component="a" button href={`/admin/students`}>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
    <ListItem component="a" button href={`/admin/teachers`}>
      <ListItemIcon>
        <AssistantIcon />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItem>
    <ListItem component="a" button href={`/admin/exams`}>
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText primary="Exams" />
    </ListItem>
  </div>
);

export const BottomList = (props) => (
  <div>
    <ListItem component="a" button href={`/admin/paystubs`}>
      <ListItemIcon>
        <MoneyOffIcon />
      </ListItemIcon>
      <ListItemText primary="Pay Stubs" />
    </ListItem>
    <ListItem component="a" button href={`/admin/settings`}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);