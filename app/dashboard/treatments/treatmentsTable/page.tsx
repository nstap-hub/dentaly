'use client';
import { useEffect, useState } from "react";
import {  columns, treatment, } from "./columns"
import { DataTable } from "./data-table";

async function fetchTreatments ():Promise<treatment[]>{

  try{
      const response = fetch('/api/treatments');
      {
        if(!(await response).ok){
          throw new Error('Error al realizar la petición' + (await response).statusText);
        }

        const data :treatment[] = await (await response).json();
        console.log('data',data);
        return data;
      }
    }catch(error){
            console.error('errror de parseo en los datos',error);
            return[];

    }
}
export default function TreatmentsTable() {
  
  const [treatments,setTreatments]=useState<treatment[]>([]);

  useEffect(()=>{

    const fetchData = async()=>{
      const fetchedTreatments = await fetchTreatments();
      setTreatments(fetchedTreatments);
    }
    fetchData();
  
  },[]);

  return (
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={treatments} />
    </div>
  );


}

