import React, { useState, useEffect } from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setFood(data.meals)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <div className="button">
        <button onClick={() => fetchFood()} className="btn">
          Generate Meal
        </button>
      </div>
      <section className="meals">
        {food.map((f) => {
          const {
            idMeal,
            strMeal,
            strInstructions,
            strMealThumb,
            strTags,
          } = f

          return (
            <article key={idMeal}>
              <div>
                <h2 className="text-2xl">
                  <span className="font-bold">Name:</span> {strMeal}
                </h2>
                <div
                  className="underline"
                  style={{ marginBottom: '20px' }}
                ></div>
                <div className='Generated-food'> <img className='image-food' src={strMealThumb} alt={strMeal} /></div>

              </div>
              <div>
                <h3 className="font-bold">How to cook</h3>
                <div className="underline"></div>
                <p>{strInstructions}</p>
                
                <div className="my-5">
                  <small>Category: {strTags}</small>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Meal