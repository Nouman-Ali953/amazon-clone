import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  const isPublicPath = path === '/';
  const token = request.cookies.get("token")?.value || "";

  console.log(isPublicPath);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/admin_panel", request.nextUrl));
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin'],
}