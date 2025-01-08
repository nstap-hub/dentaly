
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const pathname = request.nextUrl.pathname;

    if(pathname.startsWith('/api')||
       pathname.startsWith('_next')||
       pathname.includes('.')||
       pathname.startsWith('/login')||
       pathname.startsWith('/dashboard')
    ){
        return NextResponse.next();
    }
    if(pathname === '/'){
        return NextResponse.redirect(new URL ('/login', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};