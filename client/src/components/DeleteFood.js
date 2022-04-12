import React from "react";
import Grid from '@material-ui/core/Grid';



class DeleteFood extends React.Component {
    render(){
    const {classes} = this.props
        return (
          <div className="App">
        <div className={classes.root}>
           <Grid item xs={12} className={classes.paper}>
              <h1>"Hi"</h1>
              <h2>- Start adding your food</h2>
          </Grid>
        </div>
    </div>
        )
      }
}




export default (DeleteFood);