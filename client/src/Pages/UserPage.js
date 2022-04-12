import React from 'react'; 
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


let favoritesURL = "http://localhost:3000/favorites"

const styles = theme => ({
  buttons: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #eaf7dc 30%, #79a67a 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 15,
    float: "right"

  },

  container: {
    marginTop: 200,
    paddingTop: 300,
    backgroundColor: '#5a825a',
    minHeight: "100vh",
    borderRadius: "50px 50px 1px 1px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  userImage:{
    marginTop:100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: -470,
    borderRadius: "50%",
    width: 650,
    height: 625,
    backgroundPosition: "center",
    backgroundSize: "auto 80px",
    objectFit: 'cover',
    display: "block",
    zIndex: 10,
    position: "relative"
  },

  div: {
    fontSize: 80,
    color: "white",
    fontFamily: "Barlow Condensed",
    paddingLeft: 70,
    fontWeight: "bold"
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },

  userPageHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: -200,
    marginRight: 70,
    width: "100%"
  }
})


class UserPage extends React.Component{

  state = {
    currentUserData: [],
  }

    componentDidMount(){
      this.props.hideShell(false)
      if (this.props.currentUser){
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(currentUserData => {
        this.setState({currentUserData})
      })
      }
    }

    deleteFavorite = (favorite) =>{
      let FavoriteFood = favorite
      fetch(favoritesURL + favorite.id, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then((userFood) => {
        this.props.deleteUserFood(FavoriteFood)
      })
    }


  
    render(){
      const {classes} = this.props
    return ( 
      
      <React.Fragment>
        {this.props.currentUser ?
        <div>
      <CssBaseline />
      <img className={classes.userImage} src="insert image" alt="temp"/>
      <Container className={classes.container} maxWidth="xl" >
        <div className={classes.userPageHeader}>
          <Typography component="div" className={classes.div}>
              Hello, {this.props.currentUser.username}
          </Typography>
          <Button component={Link} className={classes.buttons} to="/directory">Add Food</Button>
          </div>
          {this.props.userfavorite.map(favorite => 
          <favoriteCard
            favorite={favorite} 
            key={favorite.id} 
            deletefavorite={this.deletefavorite}
            currentUserData={this.state.currentUserData}
            assignContent={this.props.assignContent}
            deleteUserFood={this.props.deleteUserFood}
          />
          )}
          </Container>
        </div>
        :
        <Typography component="div">
          Please login to see your Food favorites
        </Typography>
    }
      </React.Fragment>
    
    )


  }}
  
  export default withStyles(styles)(UserPage)