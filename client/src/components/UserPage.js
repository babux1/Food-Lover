
import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";



function FavoriteList() {
   
   
  const [food, setFoods] = useState([])

  useEffect(() => {
    fetch("/foods")
      .then((r) => r.json())
      .then(FoodArray => {
        setFoods(FoodArray)
      })
  }, [])
    
    return (

    <main><h1 className="Title" style={{
        textAlign: "center"}}> My Favorite List  </h1>
        <ul className="cards" style={{ display: "flex", flexWrap: "wrap" , justifyContent: 'space-between', alignItems: 'center',}}>
        {food.map((food) => {
          return (<FavoriteCard key={food.id} food={food} />)
        })}
      </ul>
    </main>
    )


    
}



export default FavoriteList