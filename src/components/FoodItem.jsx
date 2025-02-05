import React from 'react'
import FoodCard from './FoodCard'
import FoodData from "../data/FoodData.js"

const FoodItem = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {
            FoodData.map((item)=>{
                return <FoodCard key={item.id} id={item.id} name={item.name} price = {item.price} desc={item.desc} rating={item.rating} img={item.img}/>
            })
        }
        
    </div>
  )
}

export default FoodItem