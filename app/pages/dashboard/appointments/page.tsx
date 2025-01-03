import { Card,CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'
import { LuUserPlus } from "react-icons/lu";

function page() {
  return (
    <div className=' h-screen w-full bg-slate-50 rounded-xl'>
      <Card>
        <CardHeader><Link href='./usuarios'>
            <LuUserPlus  className='rounded-full w-16 h-full text-black hover:text-blue-500 pl-5'/>
            </Link></CardHeader>
      
      </Card>
    </div>
  )
}

export default page
