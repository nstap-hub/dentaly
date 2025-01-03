'use client';

import React from 'react'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";
import { Card,CardHeader,CardContent, CardTitle } from '@/components/ui/card';
import Patient from '@/components/ui/patient';
export default function page() {


 
  return (
    <div className='w-full h-screen'>

              <Card className='flex flex-col h-full'>
                <CardHeader className='flex flex-row justify-end items-center w-full h-30 gap-96'>
                    <CardTitle>Datos del Paciente</CardTitle>    
                    <Link  href='./appointments'>
                        <IoMdClose  size={22}/>
                      </Link>                          
                </CardHeader>
                <CardContent className='flex flex-col w-3/4 mx-auto  rounded-xl p-2'>
                
                <Patient/>
                </CardContent>  
        </Card> 
        
    </div>
  )
}


