import React from 'react'
import Image from 'next/image'
import { FaRegCircleUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";



function page() {
  
  return (
    <div className='bg-gradient-to-br from-blue-500 to-bluelogo h-screen w-flex dark:bg-black'>
      <div className='hidden h-1/6 w-full grow sm:block '></div>
        <div className='rounded-xl w-full h-4/6 mx-auto grid grid-cols-2 max-w-fit min-w-fit gap-0'>
              <div className='bg-bluelogo p-4 flex items-center justify-center rounded-tl-xl rounded-bl-xl
               dark:bg-blue-500' >
                <Image src='/dentaly_logo.png' priority alt="#" width={300} height={80}/>
              </div>
              
              <div className='bg-blue-500 p-4 flex flex-col items-center justify-center rounded-tr-xl rounded-br-xl'>
                <h1 className='text-3xl font-bold text-white my-2'>!Hello Again!</h1>
                <div className="text-sm font-light text-zinc-100 pb-8 ">Login to your account on Your Company.</div>

              <form method='post' className=" rounded-lg flex flex-col ">
              <div className='pb-2 flex flex-col' >
                <label htmlFor="user" className='block mb-2 text-md font-medium'>User</label>
                <div className='relative text-white'><span className='absolute inset-y-0 left-0 flex items-center p-1 pl-3'>
                  <FaRegCircleUser width={30} height={30} className='fill-black'/>
                  </span>
                  <input type='text' name='user' id='user'
                  className='pl-12 mb-1 bg-gray-50 text-gray-600 border focus:border-transparent
                  border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:rin-1 focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
                  /></div>
                  <label htmlFor="pass" className='block mb-2 text-md font-medium'>Password</label>
                <div className='relative text-white'><span className='absolute inset-y-0 left-0 flex items-center p-1 pl-3'>
                  <RiLockPasswordLine width={30} height={30} className='fill-black'/>
                  </span>
                  <input type='password' name='pass' id='pass'
                  className='pl-12 mb-1 bg-gray-50 text-gray-600 border focus:border-transparent
                  border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:rin-1 focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
                  />
                  </div>
                  <div className='flex flex-col mt-2 '>
                  <button type="submit" className='text-white w-full h-12 bg-bluelogo rounded-full flex justify-between'>Start <FaArrowRight /></button>
                  </div>
                  
              </div>
              
              </form>
          </div>
          
        </div>
    </div>
  )
}

export default page
