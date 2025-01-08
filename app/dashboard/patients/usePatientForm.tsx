import { FormField, FormItem, FormLabel,FormControl,FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {Button} from '@/components/ui/button';
import React from 'react'
import { Form } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { usePacientes } from '@/hooks/usePatient';
import {Calendar} from '@/components/ui/calendar';
import { Popover,PopoverContent,PopoverTrigger } from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';
import { format } from "date-fns"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from 'lucide-react';

const formSchema = z.object({
    aciente: z.string().min(1, {message: "Selecciona un paciente"}),
    fecha: z.date({
      required_error: "A date of birth is required.",
    }),
    tratamiento: z.string().min(1, {message: "Selecciona un tratamiento"}),
    horaInicio: z.string().min(1,{message:"Ingresa la hora de inicio"}),
    horaFin: z.string().min(1,{message:"Ingresa la hora de fin"}),
})

interface AppointmentFormValues{
    paciente:string;
    tratamiento: number;
    fecha: Date; // Use Date for consistency with model
  fecha_hora_inicio: Date; // Use correct data type
  fecha_hora_fin: Date; // Use
   
}


export default function usePatientForm() {

    const {pacientes,isLoading,error} = usePacientes();
    const form = useForm<AppointmentFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            paciente:"",
            tratamiento:0,
            fecha: new Date(),
            fecha_hora_inicio: new Date(),
            fecha_hora_fin:new Date()
        }
    })
    if (isLoading) {
        return <div>Cargando pacientes...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const onSubmit = (data: AppointmentFormValues) => {
        console.log(data)
    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="paciente"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Paciente</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un paciente" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                            {pacientes.map((paciente) => (
                                <SelectItem key={paciente.id} value={paciente.id.toString()}>
                                    {paciente.nombre} {paciente.apellido} ({paciente.telefono}, {paciente.fecha_nacimiento.toLocaleDateString()})
                                </SelectItem>
                            ))}
                    </SelectContent>
                  </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
      <FormField
        control={form.control}
        name="fecha"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Fecha</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Selecciona una fecha</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center" side="bottom">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={{ before: new Date() }}
                  className="border rounded-md"
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
            control={form.control}
            name="tratamiento"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Tratamiento</FormLabel>
                    <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tratamiento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                            {/*aqui va la consulta a tratamientos*/}
                            <SelectItem value="1">Limpieza dental</SelectItem>
                            <SelectItem value="2">Extraccion</SelectItem>
                    </SelectContent>
                  </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="horaInicio"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Hora Inicio</FormLabel>
                    <FormControl>
                        <Input type='time' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="horaFin"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Hora Fin</FormLabel>
                    <FormControl>
                        <Input type='time' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit">Guardar Cita</Button>
    </form>
</Form>
  );
}
