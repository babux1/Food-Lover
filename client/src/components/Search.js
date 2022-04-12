import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize: 50,
    fontFamily: "Barlow Condensed"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //add background color
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    
  },

  nav: {
    background: 'linear-gradient(45deg, #79a67a 30%, #3e8754 90%)',
    padding: 15,
    marginBottom: 20
  },

  type: {
    fontSize: 25
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  select: {
    fontSize: 25,
  }
  
})

class Search extends React.Component{
    render(){
      const {classes} = this.props
    return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.nav}>
           <Toolbar>

           <Typography className={classes.title} variant="h6" noWrap>
            Add ya food
          </Typography>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <InputBase
              placeholder="Search foods"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              type="text"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {this.props.changeSearch(e.target.value)}}
            />
        </div>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
      <label>
        <strong className={classes.type}>Food Type:</strong>
        &nbsp;&nbsp;&nbsp;
        <select className={classes.select} onChange={(e) => this.props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Korean">Korean</option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
        </select>
      </label>
      </Toolbar>
      </AppBar>
      </div>
    )
  }}
  
  export default withStyles(styles)(Search);