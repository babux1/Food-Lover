
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
            <img src={image_url} alt='temp'style={{
          borderColor: "red",
                    borderWidth: 5,
                    height: "12rem",
                    width: "12 rem"
        }}/>
          </div>
          <div>
                <strong>{description}</strong>
                <br></br>
                <strong>{category }</strong>
          </div>
            </ul>
      );
}

export default FavoriteCard