'use client'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSideBar } from '@/components/app-sidebar'
import { Separator } from '@radix-ui/react-separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Toaster } from 'sonner';
export default function Layout({children}:{children: React.ReactNode}){
          return (
            <html>
              <body>
            <SidebarProvider className="bg-gradient-to-br from-blg to-bluelogo ">
                <AppSideBar />
                  <main className='flex flex-col w-full h-full  bg-blue-300'>
                    <div className='p-4'>
                  <header className='flex h-16 shrink-0 items-center  border-b rounded-xl  p-4 w-full bg-blg'>
                  <div className='flex items-center gap-4'>
                    
                <SidebarTrigger className='text-white'/>
                <Separator orientation='vertical' className='mr-2 h-4 ' color='black'/>
                <Breadcrumb>
                  <BreadcrumbList className='text-white'>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/pages/dashboard/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/pages/dashboard/appointments/">Appointments</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/pages/dashboard/patients/">Patients</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className='text-white'>Dentaly</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                </div>
                </header>
                </div>
                <div className='flex p-4'>
                {children}
                <Toaster className=' bg-blg text-white border-slate-500'/>
                </div>
              
                  </main>
                    
                   
                  
             
                
            </SidebarProvider>
            </body>
            </html>
          );
        }
        
        
