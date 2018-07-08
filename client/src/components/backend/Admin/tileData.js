
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

export const topList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssistantIcon />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText primary="Exams" />
    </ListItem>
  </div>
);

export const bottomList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MoneyOffIcon />
      </ListItemIcon>
      <ListItemText primary="Pay Stubs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);