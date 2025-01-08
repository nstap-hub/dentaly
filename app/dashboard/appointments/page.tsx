import { Card,CardContent,CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react'



function page() {
  return (
    
   <div className=' flex w-full h-full'>
      <Card className='flex flex-col w-full h-screen bg-white border-slate-500 border-x-2'>
        <CardHeader className='text-blg items-center w-full text-lg'>
              Adding Appointments        
        </CardHeader>
        <Separator className='bg-slate-500'/>
      <CardContent className='flex h-full'>

     
      </CardContent>
      </Card>
      </div>
      
  )
}

export default page
