import { PrismaClient } from "@prisma/client";

let prisma : PrismaClient| null = null;

const PrismaClientSingleton = () =>{
    if(!prisma){
        prisma = new PrismaClient
    }
}

export default PrismaClientSingleton();