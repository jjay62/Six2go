import { handleStripeWebhook } from '@/lib/stripe-webhook-handler'

/** @deprecated Prefer `POST /api/stripe-webhook` in Stripe Dashboard (locale-agnostic URL). */
export async function POST(req: Request) {
  return handleStripeWebhook(req)
}
