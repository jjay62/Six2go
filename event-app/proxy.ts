import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/[locale]/lib/update-session'
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request)
  return updateSession(request, intlResponse)
}

export const config = {
  matcher: [
    // Skip /api (Stripe webhooks, etc.), static assets, and video so intl/auth proxy does not rewrite them
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm|mov|m4v|ogg)$).*)',
  ],
}
