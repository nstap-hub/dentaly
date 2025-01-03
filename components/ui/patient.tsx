import React from 'react'
import { Form,FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import{z} from "zod";
import {  useForm, } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button';

const patientSchema= z.object({
  name: z.string({
    required_error:'Enter a name'
  }).min(3).max(50),
  lastname : z.string({required_error:'Enter a lastname'}).min(4).max(50),
  birthday :z.string({required_error:'Entera a date'}).date(),
  phone: z.string().transform((val)=>parseInt(val)),
  street: z.string(),
  int_num :z.string().transform((val)=>parseInt(val)),
  ext_num: z.string().transform((val)=>parseInt(val)),
  suburb: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  email: z.string().email(),
  allergies: z.string(),
  chronic_disease: z.string()  
})
type PatientType = z.infer< typeof patientSchema>;
function Patient() {
    const form = useForm<z.infer<typeof patientSchema>>({
        resolver: zodResolver(patientSchema),
        defaultValues:{
        name:'',
        lastname:'',
        birthday:'',
        phone:0,
        street:'',
        int_num:0,
        ext_num:0,
        suburb: '',
        city: '',
        state: '',
        country:'',
        email: '',
        allergies: '',
        chronic_disease:''  
        },
      });
        const onSubmit= form.handleSubmit((values: PatientType) =>
          console.log(values));
  
    return (
    <Form {...form}>
    <form onSubmit={onSubmit}>
    <div className=' flex flex-row justify-between gap-2 pb-1'>
    <FormField
     control={form.control}
     name='name'
     render={({field})=>(                  
    
      <FormItem className=' bg-white w-1/2 p-2 rounded-xl '>
        <FormLabel>
          Name <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
      
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='lastname'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/2 p-2 rounded-xl'>
        <FormLabel>
          Lastname <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black'type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    </div >
    <div className='flex flex-row justify-between gap-2 pb-1'>
    <FormField
     control={form.control}
     name='birthday'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/2 p-2 rounded-xl'>
        <FormLabel>
          Birthday <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='date'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='phone'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/2 p-2 rounded-xl'>
        <FormLabel>
          Phone <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' maxLength={10} type='number'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    </div>
    
    <div className='flex flex-row flex-grow justify-between gap-3 pb-1'>
    
    <FormField
     control={form.control}
     name='street'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-2/3 p-2 rounded-xl'>
        <FormLabel>
          Street <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <div className='flex gap-4 pr-2'>
    <FormField
     control={form.control}
     name='ext_num'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-2/4 p-2 rounded-xl'>
        <FormLabel>
          Ext Num <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input  className='border-black ' maxLength={5} type='number'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='int_num'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-2/4 p-2  rounded-xl'>
        <FormLabel>
          Int Num 
        </FormLabel>
        <FormControl>
          <Input className='border-black' maxLength={5} type='number'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    
    </div>
    </div>
    <div className='flex flex-row flex-grow justify-between gap-2 pb-2'>
    <FormField
     control={form.control}
     name='suburb'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/4 p-2  rounded-xl'>
        <FormLabel>
          Suburb <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='city'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/4 p-2  rounded-xl'>
        <FormLabel>
          City <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='state'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/4 p-2  rounded-xl'>
        <FormLabel>
          State <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='country'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/4 p-2  rounded-xl'>
        <FormLabel>
          Country <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black'type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    </div>
    <div className='flex flex-row flex-grow justify-between gap-2 pb-1'>
    <FormField
     control={form.control}
     name='email'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/3 p-2  rounded-xl'>
        <FormLabel>
          Email <span className='text-red-500'>*</span>
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='email'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='allergies'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/3 p-2  rounded-xl'>
        <FormLabel>
          Allergies
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    <FormField
     control={form.control}
     name='chronic_disease'
     render={({field})=>(                  
    
      <FormItem className='bg-white w-1/3 p-2  rounded-xl'>
        <FormLabel>
          Chronic Disease
        </FormLabel>
        <FormControl>
          <Input className='border-black' type='text'{...field}/>
        </FormControl>
        
      </FormItem>
      )}
    />
    </div>
      <div className='flex flex-col'>
        <Button type='submit'  >
           Save
           </Button></div>
    
    </form>
    
 
  </Form>
  
  )
}

export default Patient