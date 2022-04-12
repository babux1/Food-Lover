import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
  toolbar: {
    marginTop: "5px",
  marginBottom: "15px",
  marginRight: "20px",
  marginLeft: "20px",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#91c292",
  },

  buttons: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #79a67a 30%, #25853f 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: 'white',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 15,
  },


  toolbarTitle: {
    flex: 1,
    paddingLeft: 140,
    fontSize: 70,
  },

  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
});


class NavBar extends React.Component{
  
  render(){
    const {classes} = this.props
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <Button component={Link} to="/"><Avatar >
            </Avatar>
        </Button>
          {this.props.currentUser ?
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{ fontFamily: 'Vidaloka' }}
        >
          Food Lover
        </Typography>
        :
        <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
        style={{ fontFamily: 'Vidaloka' }}
      >
       
      </Typography>
        }
        
        &nbsp;&nbsp;&nbsp;
        {this.props.currentUser ? 
        
        <Button onClick={this.props.logOut} component={Link} to="/thankyou" className={classes.buttons} variant="outlined" size="small">
          Sign out
        </Button>
        :
        <Button component={Link} to="/login" variant="outlined" size="small" className={classes.buttons}>Sign in</Button>}

        &nbsp;&nbsp;&nbsp;
        
        {this.props.currentUser ? null : <Button component={Link} to="/register"  className={classes.buttons} variant="outlined" size="small">
          Register
        </Button>}

      </Toolbar>
     
    </React.Fragment>
  );
}
}

export default withStyles(styles)(NavBar)