import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') { // Importante: Manejar el método GET
        res.status(200).json({ message: 'API de prueba funcionando' });
    } else {
        res.status(405).json({ error: 'Método no permitido. Solo se aceptan solicitudes GET.' }); // Manejo de otros métodos
    }
}