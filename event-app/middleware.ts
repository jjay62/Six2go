import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/[locale]/lib/middleware'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request)
  return updateSession(request, intlResponse)
}

export const config = {
  matcher: [
    // Skip static assets (including video) so locale middleware does not rewrite /videos/*.mp4
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm|mov|m4v|ogg)$).*)',
  ],
}
