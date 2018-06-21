import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, RadioGroup, Radio,FormControlLabel, FormGroup, TextField, Button } from '@material-ui/core';

const styles = theme=> ( {
  textField :{
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom:'10%'
  },
  appBar : {
    marginBottom: '10%'
  },
  card : {

  },
  toolBar : {
    backgroundColor: ''
  },
  radioGroup : {
    marginLeft:'25%'
  },
  button : {
    margin: theme.spacing.unit,
  },
  wrapper : {
    margin: '25%',
  }
})
class LogIn extends React.Component {
  
  state = {
    value: 'Admin',
    userName:'',
    password:''
  }
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value,})
    //console.log(this.state)
  }

  handleClick =()=> {
    console.log("username: "+ this.state.userName)
    console.log("password:" + this.state.password)
    console.log("Type:" + this.state.value)

  }


  render() {
    var {classes} = this.props
    return (
  <div className = {classes.wrapper}>
    <Card className = {classes.card}>
    <AppBar className= {classes.appBar} position="static" color="default">
    <Toolbar className = {classes.toolBar}>
     <RadioGroup className = {classes.radioGroup} name = "value" row ='true' value = {this.state.value} onChange={e=>this.handleChange(e)}>
     <FormControlLabel  value="Admin" control={<Radio />} label="Admin" />  
     <FormControlLabel  value="Student" control={<Radio />} label="Student" /> 
     <FormControlLabel  value="Teacher" control={<Radio />} label="Teacher" />   
     </RadioGroup> 
    </Toolbar>
    </AppBar> 
 
    <TextField
     name = "userName"
     className = {classes.textField}
     placeholder="Username"
     autoFocus 
     onChange={e=>this.handleChange(e)}
     />
     <br/>
     <TextField
     name = "password"
     type = 'password'
     className = {classes.textField}
     placeholder="Password" 
     onChange={e=>this.handleChange(e)}
     /> 
     <br/>
     <Button variant="contained" color="secondary" className={classes.button} onClick = {this.handleClick}>
     Login
    </Button> 
     </Card>  
</div>)
  }
}
export default withStyles(styles)(LogIn)