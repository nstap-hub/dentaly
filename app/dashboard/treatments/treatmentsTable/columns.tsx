    'use client';
    import {ColumnDef} from '@tanstack/react-table';
    
    export type treatment = {
            id:number,
            nombre_ : string,
            descripci_n : string,
            precio: string
    }

    export const columns :ColumnDef<treatment>[]=[
            {
                accessorKey: 'id',
                header:'ID'
            },
            {
                accessorKey:'nombre_',
                header : 'TREATMENT'
            },
            {
                accessorKey:'descripci_n',
                header:'DESCRIPTION'
            },
            {
                accessorKey: 'precio',
                header:() =><div className='text-right'> PRICE</div>,
                cell: ({row}) =>{
                    const precio = parseFloat(row.getValue('precio'))
                    const formatted = new Intl.NumberFormat('es-mx',{
                        style: 'currency',
                        currency: 'MEX',
                    }).format(precio);
                    return <div className='text-right font-medium'>{formatted}</div>
                }
            }
        ]
