'use client';

import React from "react";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";

const links = [{name: 'Home', href:'/Dashboard/',icon: GoHomeFill},
    {name: 'Appointments',
         href:'/Dashboard/Appointments',
          icon:HiDocumentDuplicate},
    { name:'Status', href:'/Dashboard/Status',icon:FaUserFriends}
]

export default function NavLinks(){
    const [activeLink,setactiveLink] =useState('/');
    const handleLinkState = (href:string) =>{
        setactiveLink(href);
    }

    return(
        <div className="grid grid-cols-1 h-5/6">
            <div className="grid h-2/5 pt-2 mb-2 gap-2">
            {links.map((link)=>
        (
            <Link key={link.name}
             href={link.href} 
             onClick={() => handleLinkState(link.href)}
             className={` flex items-center pl-4 py-4 border-cyan-50  content-center rounded-xl mx-2 pt-2 bg-slate-300 p-3
              text-xl font-medium hover:bg-sky-400
               ${activeLink===link.href ? 'bg-blue-600 text-white' : ''}`}>
            
               <link.icon className="w-14" size={30}/>
                  <p className="hidden md:block">{link.name}</p>
            </Link>
            
    ))}

            </div>
        

        </div>
    );
}