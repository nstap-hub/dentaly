import React from 'react'
import TreatmentForm from './TreatmentForm'
import { Card,CardContent } from '@/components/ui/card'
import TreatmentsTable from './treatmentsTable/page'

function page() {
  return (
    <div className='flex w-full h-screen'>


    <Card className=' flex w-full h-full'>
        <CardContent className='flex '>
        <TreatmentsTable />
        <TreatmentForm/>
        </CardContent>
    </Card>
    </div>    
  )
}

export default page
