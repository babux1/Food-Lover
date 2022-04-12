import React from 'react';

let FavoriteURL = "http://localhost:3000/favorites"

class EditForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault()
        let newContent = document.querySelector('#content').value
        this.props.assignContent(newContent, this.props.favorite.id)   
    }

    render(){
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>Add your food content</p>
        <div>
            <div>
                <input id="content" name="content" type="text" placeholder="Enter Content"/>
            </div>
        </div>
        <input type="submit"/>
    </form>
    )
  }}
  
  export default EditForm;