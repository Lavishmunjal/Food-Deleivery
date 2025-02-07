import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slice/CartSlice'

const FoodCard = ({id, name, price, desc, rating, img, handleToast}) => {
  const dispatch = useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg'>
        <img src={img} alt="" className='w-auto h-[130px] hover:scale-120 cursor-grab transition-all duration-500 ease-in-out'/>
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
            <span className='flex items-center justify-center '>
                <AiFillStar className='text-yellow-500 mr-1'/>{rating}
            </span>
            <button onClick={()=>{
              dispatch(addToCart({id, name, price,rating, qty:1, img}))
              handleToast(name)
            }} className='p-1 text-white bg-green-500 rounded-lg hover:bg-green-600 text-sm'>Add to Cart</button>
        </div>
    </div>
  )
}

export default FoodCard