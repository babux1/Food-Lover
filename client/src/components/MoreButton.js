import React from 'react'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

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
  }

})


class MoreButton extends React.Component{
    render(){
      const {classes} = this.props
    return <div>
           
            <Button onClick={this.props.moreFoods} className={classes.buttons}>
            MORE
          </Button>
                      
          </div>
}}

export default withStyles(styles)(MoreButton)