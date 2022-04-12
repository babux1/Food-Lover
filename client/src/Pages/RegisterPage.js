import React from 'react'; 
import { Navigate,  Link } from "react-router-dom";
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
    backgroundImage: 'input image',
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
    width: '100%',
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


class RegisterPage extends React.Component {
  state = {
    username: "",
    password: "",
    created: false,
    errorMessage: "",
  };

  componentDidMount(){
    this.props.hideShell(true)
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username,password } = this.state;

    let user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === "created") {
          this.setState({ created: true, errorMessage: "" });
        }
      })
      .catch((response) =>
        this.setState({
          errorMessage:
            "Verify that your server is running!",
        })
      );
  };

  render() {

    const {classes} = this.props

    return (
      <Grid container component="main" className={classes.root}>
<CssBaseline />
<Grid item xs={false} sm={4} md={7} className={classes.image} />
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
    </Avatar>
    <Typography component="h1" variant="h5">
      Register
    </Typography>
    <div>
        {this.state.created ? (
            <Navigate to="/login" />
        ) : (
        <div>
            <div className="please-log-in">
              <p>{this.state.errorMessage}</p>
            </div>
        <br />
    <form className={classes.form}
          noValidate
          onSubmit={this.createUser}>
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
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit}
      >
        Register
      </Button>
      <Grid container>
          <Button component={Link} to="/login" href="#" variant="body2">
            Already have an account? Login here!
          </Button>
      </Grid>
      <Box mt={5}>
      </Box>
    </form>
    </div>
    )}
    </div>
  </div>
</Grid>
</Grid>
    )
     
  }
}


export default withStyles(styles)(RegisterPage);