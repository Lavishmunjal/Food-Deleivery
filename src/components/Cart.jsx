import React from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCart from './ItemCart'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const [active, setActive] = React.useState(true)
  const cartItems = useSelector((state)=>state.cart.cart)
  const totalQty = cartItems.reduce((totalQty, item)=>totalQty+item.qty, 0)
  const totalAmount = cartItems.reduce((totalAmount, item)=>totalAmount+(item.qty*item.price),0)
  console.log(cartItems);
  const navigate = useNavigate()
  
  return (
    <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 bg-white h-full mb-3 ${active? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50 `}>
            <div className='flex justify-between items-center my-3'>
                <span className='text-xl font-bold text-gray-800'>My Order</span>
                <IoMdClose onClick={()=>setActive(!active)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
            </div>

            {
              cartItems.length>0 ? cartItems.map((food)=>{
                return <ItemCart key={food.id} id={food.id} name ={food.name} price = {food.price} img={food.img} qty={food.qty} /> 
              }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>
            }

            
            
        
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
            <h3 className='font-semibold text-gray-800'>Total amount : {totalAmount}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2 '/>
            <button onClick={()=>navigate("/success")} className='bg-green-500 mb-5 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>
    </div>
    <FaShoppingCart onClick={()=>setActive(!active)} className={`cursor-pointer rounded-full bg-white shadow-md text-5xl  p-3 fixed bottom-4 right-4 ${totalQty>0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  )
}

export default Cart