"use client";
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { LuUserPlus } from 'react-icons/lu'

function page() {
  return (
    
    <div className='flex w-full h-screen'>
    <Card className=' flex bg-white w-full h-full pt-2 border-slate-700 border-x-2 '>
      <CardHeader className='flex-end items-end w-full h-1/6 content-center '>
      <Link href='./usuarios'>
      <LuUserPlus size={45}  className='rounded-full  text-blg hover:text-blue-500 pl-5'/>
      </Link>
      </CardHeader>
      <CardContent className='h-full'>
     
      </CardContent>
    </Card>
    </div>
    
  )
}

export default page
