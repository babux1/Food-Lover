
import React from "react";


function FavoriteCard({food}) {
    const { title, description, image_url, category } = food
    
    return (
        

        <ul 
            className="card">
            <div className="details">
            <strong>{title}</strong>
          </div> 
          <div className="image">
            <img src={image_url} alt='temp' className= "card-image" style={{
          borderColor: "red",
            borderWidth: 5,
            width: "100%",
            height: "12rem",  }}/>
          </div>
        <div className="description">
          <strong>Description:</strong>
          <br></br>
          <strong>{description}</strong>
          <br></br>
          <strong>Category: {category }</strong>
          </div>
            </ul>
      );
}

export default FavoriteCard