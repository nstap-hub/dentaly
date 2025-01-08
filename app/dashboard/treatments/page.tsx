import React from 'react'
import TreatmentForm from './TreatmentForm'
import { Card,CardContent } from '@/components/ui/card'

function page() {
  return (
    <div className='flex w-full h-screen'>


    <Card className=' flex w-full h-full'>
        <CardContent>
        <TreatmentForm>

</TreatmentForm>
        </CardContent>
    </Card>
    </div>    
  )
}

export default page
