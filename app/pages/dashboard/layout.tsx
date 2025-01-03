'use client'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSideBar } from '@/components/app-sidebar'
        
export default function Layout({children}:{children: React.ReactNode}){
          return (
            <SidebarProvider>
                <AppSideBar/>
                <main>
                    <SidebarTrigger/>
                    {children}
                </main>
            </SidebarProvider>
          );
        }
        
        
