
import React from 'react' ;
import { Link } from "react-router-dom" ;
import { useState } from 'react' ;
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  // open menu when clicked
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
// hide menu when clicked
  const closeMenu = () =>{
    setIsOpen(false)
  }
  return (
    
   <nav className='bg-blue-400 w-full p-4 fixed top-0 z-50' >
    <div className='flex  w-full flex-wrap items-center justify-between'>
    <Link className='text-white text-2xl font-bold' to="/">Group Home</Link>
    <div className='md:hidden'>
<button onClick={ handleClick }
className='text-white flex flex-col justify-center items-center'>
  
  <svg 
  fill='none'
  stroke='currentColor'
  strokeLinecap='round'
  strokeLinejoin='round'
  stroke-width='2'
  viewBox='0 0 24 24'
  className='w-6 h-6'>
    <path d='M4 6h16M4 12h16M4 18h16'></path>
    </svg>
    
</button>

    </div>
<ul className='hidden md:flex space-x-4'>
  <li>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-sky-700 hover:text-gray-900' : 'text-white hover:text-gray-400') }>About</NavLink>
  </li>

  <li>
    <NavLink to="/service" className={({ isActive }) => (isActive ? 'text-sky-700 hover:text-gray-900' : 'text-white hover:text-gray-400') }>Service</NavLink>
  </li>

  <li>
    <NavLink to="/ContactUs" className={({ isActive }) => (isActive ? 'text-sky-700 hover:text-gray-900' : 'text-white hover:text-gray-400') }>Contact Us</NavLink>
  </li>
</ul>

</div>

{isOpen ? (
  <ul className='absolute  w-full text-right left-0 mt-2  bg-gray-300 shadow-lg md:hidden flex flex-col'>
     <li>
    <NavLink className='py-2 px-4 block hover:text-sky-700 ' onClick={closeMenu} to="/about">About</NavLink>
  </li>
  <li>
    <NavLink className='py-2 px-4 block hover:text-sky-700'  onClick={closeMenu} to="/service">Service</NavLink>
  </li>
  <li><NavLink className='py-2 px-4 block hover:text-sky-700' onClick={closeMenu} to="/ContactUs">Contact Us</NavLink></li>
  </ul>
) : null}

</nav>


  )
}
