// hooks/usePatents.ts 
import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface PatientData{
    id:number;
    nombre: string;
    apellido: string;
    telefono:string;
    fecha_nacimiento:Date;
}
export const usePacientes = () => {
    const [pacientes, setPacientes] = useState<PatientData[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Manejar el estado de carga
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPacientes() {
            setIsLoading(true); // Establecer el estado de carga a true
            try {
                const pacientesData = await prisma.pacientes.findMany({
                    select: {
                        id: true,
                        nombre: true,
                        apellido: true,
                        telefono: true,
                        fecha_nacimiento: true,
                    },
                });
                setPacientes(pacientesData);
            } catch (err) {
                setError('Error al cargar los pacientes.'); // Manejar errores
                console.error("Error fetching pacientes:", err)
            } finally {
                setIsLoading(false); // Establecer el estado de carga a false
            }
        }

        fetchPacientes();
    }, []);

    return { pacientes, isLoading, error };
};