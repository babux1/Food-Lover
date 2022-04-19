import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";


function AddFavorite() {

    const [title, setTitle] = useState('')
    const [image_url, setImage_url] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [foodList, setFoodList] = useState([])


    useEffect(() => {
        fetch("/foods")
          .then((r) => r.json())
          .then((newFoodArray) => {
          setFoodList(newFoodArray)
        })
    }, [])
    
    function handleAddFood(newFood) {
        const updatedFoodArray = [...foodList, newFood]
        setFoodList(updatedFoodArray)
    }
    

      function handleNewFood(e) {
        e.preventDefault()
          fetch("/foods", {
              method: "POST", 
              headers: {
                  "Content-Type": "application/json", 
              },
              body: JSON.stringify({
                  title:title,
                  image_url: image_url
                  
              })
          }).then((resp) => resp.json())
          
          .then((newFood) => handleAddFood(newFood))
  
      }

      return (
        <div >
          <h1>Add Food</h1>
          <form onSubmit={handleNewFood}>
            <div>
              <input type="text" title="food name" placeholder="Food Name" value={title} onChange={(e)=> setTitle (e.target.value)} />
            </div>
            
            <div>
              <input type="text" title="description" placeholder="Description" value={description} onChange={(e)=> setDescription (e.target.value)} />
            </div>
                  
            <div>
              <input type="text" title="category" placeholder="Category" value={category} onChange={(e)=> setCategory (e.target.value)} />
            </div>
            
                  
            <div>
              <input type="text" title="image" placeholder="Image" value={image_url} onChange={(e)=> setImage_url (e.target.value)} />
            </div>
            <input type="submit" value="Submit" />
          </form>
            {
                foodList.map((food) => {
                return <FavoriteCard food={food}/>
              })
            }
              
          
        </div>
      );

}


export default AddFavorite