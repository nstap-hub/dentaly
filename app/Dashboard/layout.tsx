
import Sidenav from "./sidenav";

export default function Layout({children}:{children: React.ReactNode}){
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-64 flex">
                <Sidenav/>   
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-sky-50">{children}</div>
        </div>
    );
}