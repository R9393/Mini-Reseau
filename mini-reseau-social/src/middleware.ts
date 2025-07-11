import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const protectedRoutes = ['/feed', '/profile', '/post', '/followers', '/following']
  const authRoutes = ['/login', '/register']

  // Redirection si non authentifié
  if (!token && protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirection si déjà authentifié
  if (token && authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  return NextResponse.next()
}