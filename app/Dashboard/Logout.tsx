import React from 'react'
import { CiLogout } from "react-icons/ci";

function Logout() {
  return (
    
      <div className='h-1/5 flex items-center  ml-2 mr-2 font-medium text-xl '>
        <div className='h-3/6 pl-6 w-full rounded-xl flex items-center bg-slate-300 hover:bg-sky-500'>
            <CiLogout width={80} height={80} className='text-3xl'/>
        <p className='pl-2'>Cerrar Sesion</p>
        </div>
       </div>
  )
}

export default Logout
