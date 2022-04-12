import React from 'react';
import DeleteFood from '../components/DeleteFood';

class LandingPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }
    render(){
    return (
     
      <div >
       <DeleteFood/>
      </div>
     
    )
  }
}

  export default LandingPage