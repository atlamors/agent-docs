import { NextResponse } from 'next/server'

const PASSWORD = 'martell'
const COOKIE_NAME = 'agent_docs_auth'
const COOKIE_VALUE = 'authenticated'

function safeRedirectPath(request, value) {
  if (!value) {
    return '/'
  }

  const url = new URL(value, request.url)

  if (url.origin !== new URL(request.url).origin) {
    return '/'
  }

  return `${url.pathname}${url.search}`
}

export async function POST(request) {
  const formData = await request.formData()
  const password = formData.get('password')
  const nextPath = safeRedirectPath(request, formData.get('next'))

  if (password !== PASSWORD) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('error', '1')
    loginUrl.searchParams.set('next', nextPath)

    return NextResponse.redirect(loginUrl, 303)
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), 303)

  response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  })

  return response
}
