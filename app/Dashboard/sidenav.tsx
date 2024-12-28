import React from 'react'
import NavLinks from './Navlinks'
import Logout from './Logout'


function sidenav() {
  return (
    <nav className='flex flex-col h-full w-full border
      bg-gray-50 text-black text-bold'> 
      <NavLinks/>
      <Logout/>
    </nav>
  )
}

export default sidenav
