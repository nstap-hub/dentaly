
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const pathname = request.nextUrl.pathname;
    if(pathname === '/'){
        return NextResponse.redirect(new URL ('/pages/login', request.url));
    }
}
export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'], // Excluye /api, archivos estáticos, etc.
};