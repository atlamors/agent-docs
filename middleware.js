import { NextResponse } from 'next/server'

const COOKIE_NAME = 'agent_docs_auth'
const COOKIE_VALUE = 'authenticated'

export function middleware(request) {
  const authenticated =
    request.cookies.get(COOKIE_NAME)?.value === COOKIE_VALUE

  if (authenticated) {
    return NextResponse.next()
  }

  const loginUrl = request.nextUrl.clone()
  loginUrl.pathname = '/login'
  loginUrl.searchParams.set(
    'next',
    `${request.nextUrl.pathname}${request.nextUrl.search}`
  )

  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    '/((?!api/login|login|_next/|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'
  ]
}
