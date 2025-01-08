import { PrismaClient,Prisma} from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){
    console.log("req body: ", req.body);
    if(req.method === 'POST'){
        try{
            const {nombre,descripcion,precio }= await req.json();

            if(typeof precio!== 'string' || precio.trim()===''){
                return NextResponse.json({error: ' El precio es requerido'},{status: 400});

            }
            const precioDec = precio.replace(/[^0-9.,]/g, '').replace(',', '.');
            const precioNumerico = Number(precioDec);

            if(isNaN(precioNumerico) || precioNumerico <0){
                return NextResponse.json({error:'El precio debe de ser un numero valido positivo'},{status: 400});
            }
            const nuevoTratamiento = await prisma.tratamientos.create({
                data:{
                    nombre_ : nombre,
                    descripci_n: descripcion,
                    precio:new Prisma.Decimal(precioDec),
                },
                

            });
            return NextResponse.json(nuevoTratamiento,{status:200});
        }catch (error){
            console.error('Error en la API: ',error);
            console.error('Error stringified:', JSON.stringify(error)); 
            return NextResponse.json({ error: 'Error al crear el tratamiento en la API'},{status: 500});
        }
    }
}