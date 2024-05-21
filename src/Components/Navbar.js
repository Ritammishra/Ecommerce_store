import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <div className='bg-gray-600 flex justify-between text-white px-4 py-6'>
      <Link className='logo' to='/'>Ecom Store</Link> 
      <div className=''>
        <Link className=' mr-3 navLink' to='/'>Home</Link>
        <Link className=' mr-3 navLink' to='/electronics'>Electronic</Link>
        <Link className=' mr-3 navLink' to='/Cart'>Cart</Link>
        <span className=' mr-3 cartCount'>
          Cart items: {items.length}
        </span>
      </div>
    </div>
  )
}

export default Navbar
