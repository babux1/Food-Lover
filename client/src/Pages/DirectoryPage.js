import React from 'react';
import DirectoryCard from '../components/DirectoryCard.js'
import Search from '../components/Search.js'
import MoreButton from '../components/MoreButton.js'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BackButton from '../components/BackButton.js';



const styles = theme => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    objectFit: "contain",
    

  },

 background: {
    backgroundImage: "insert image",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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

  title:{
    textAlign: "left",
    padding: 40,
    fontSize: 45
  },

  container: {
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
    
  },

  pagination: {
    maxWidth: "92%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto"
  }
});

class DirectoryPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }

    render(){
      const {classes} = this.props;
    return (
      <div className={classes.background}>
        <Search changeSearch={this.props.changeSearch} updateFilter={this.props.updateFilter} />
        <br/>
        <Container container spacing={4} className={classes.container} justify="center" maxWidth="false">
            {this.props.foods.map(food => 
              <DirectoryCard 
                food={food} 
                key={food.id} 
                addToFavorites={this.props.addToFavorites} 
                updateCurrentUser={this.props.updateCurrentUser} 
                setUserFavorites={this.props.setUserFavorites}/>
            )}
        </Container>
        <div className={classes.pagination}>
            {this.props.limit === 0 ? null : <BackButton backfoods={this.props.backfoods} foods={this.props.foods}/>} 
            {this.props.limit + 8 < this.props.foodLength ? <MoreButton morefoods={this.props.morefoods} foods={this.props.foods}/> : null}
        </div>
      </div>
      
    )
  }}
  
  export default withStyles(styles)(DirectoryPage);