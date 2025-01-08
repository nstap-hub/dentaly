'use client';
import { FormField, FormItem, FormLabel, FormControl, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';




const formSchema= z.object({
    nombre: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    descripcion: z.string().optional(), // La descripción es opcional
    precio: z.string().refine((value) => !isNaN(Number(value)), { message: 'El precio debe ser un número' }),  
})

interface TreatmentFormValues{
    nombre:string;
    descripcion?:string;
    precio:string;
}
export default function TreatmentForm() {
  
    const[isLoading,setIsLoading] = useState(false);

    const onSubmit = async(data:TreatmentFormValues) =>{
        console.log(data);
        try{
            const response = await fetch('/api/treatments',
                {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(data),
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al crear el tratamiento');
            }
            console.log('Tratamiento guardado');
        form.reset();
        toast.success('Tratamiento agregado con exitación',{
            duration:3000,
            position:'bottom-right'
        });
        } catch (error){
            console.error('Error al guardar el tratamiento', error);
            toast.error('Error al guardar el tratamiento',{
                description:'Por favor, revisa los datos ingresados..'
            });
        }finally{
            setIsLoading(false)
        }
        return{onSubmit, isLoading};
    };



    const form = useForm<TreatmentFormValues>({
        resolver:zodResolver(formSchema),
        defaultValues:{
          nombre:'',
          descripcion:'',
          precio:'0',  
        },
    });
    //


    //
   
    
  return (
    
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            control={form.control}
            name='nombre'
            render={({field}) => (
                <FormItem>
                    
                <FormLabel>
                    Nombre
                </FormLabel>
                <FormControl>
                    <Input type='text'placeholder='Nombre del Tratamiento'  {...field}/>
                </FormControl>
                </FormItem>
        )}
        />
        <FormField
            control={form.control}
            name='descripcion'
            render={({field}) => (
                <FormItem>
                    
                <FormLabel>
                    Descripcion
                </FormLabel>
                <FormControl>
                    <Input type='text'placeholder='ex. Remocion de'  {...field}/>
                </FormControl>
                </FormItem>
        )}
        />
        <FormField
            control={form.control}
            name='precio'
            render={({field}) => (
                <FormItem>
                    
                <FormLabel>
                    Precio
                </FormLabel>
                <FormControl>
                    <Input type='number'  {...field}/>
                </FormControl>
                </FormItem>
        )}
        />
        <Button type='submit'>Guardar </Button>
        </form>
      </Form>
    </div>
    
  )
}


