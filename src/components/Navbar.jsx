import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slice/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10'>
        <div className=''>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
        </div>
        <div>
            <input type="search" name='search' placeholder='Search Here' autoComplete='off' onChange={(e)=>dispatch(setSearch(e.target.value))} className='lg:w-[25vw] rounded-lg p-3 border border-gray-400 text-sm outline-none'/>
        </div>
    </nav>
  )
}

export default Navbar