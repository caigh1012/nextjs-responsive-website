import { NextRequest, NextResponse } from 'next/server';

const TOKEN_COOKIE_KEY = 'token';

export function proxy(request: NextRequest) {
  const token = request.cookies.get(TOKEN_COOKIE_KEY)?.value;

  if (token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login'],
};
