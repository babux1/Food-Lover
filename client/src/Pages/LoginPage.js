import React from 'react'; 
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'add_image',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    marginTop: 375,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#91c292",
  },
  form: {
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #91c292 30%, #317532 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

class LoginPage extends React.Component{
  
  state = {
    username: "",
    password: ""
  }

  componentDidMount(){
    this.props.hideShell(true)
  }

  
  
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(userData => {
      if (userData.error) {
        console.log(userData.error)
      }
      else{
        this.props.updateCurrentUser(userData)
      }
    })
  }
  
  
  
  
  render(){
    
    const {classes} = this.props
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image_url} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}
                noValidate
                onSubmit={this.handleLoginSubmit} 
                loading={this.props.authenticatingUser}
                error={this.props.failedLogin}>
            <TextField
              variant="outlined"
              color="#6b7d6c"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              type="username"
              autoComplete="username"
              autoFocus
              onChange={this.handleChange}
              value={this.state.username}
            />
            <TextField
              variant="outlined"
              color="#6b7d6c"
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
                <Button component={Link} to="/register" href="#" variant="body2">
                  Don't have an account? Register here!
                </Button>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  }}
  
  export default withStyles(styles)(LoginPage)
