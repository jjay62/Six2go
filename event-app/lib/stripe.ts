import 'server-only'

import Stripe from 'stripe'

let stripeSingleton: Stripe | null = null

export function getStripe(): Stripe {
  if (stripeSingleton) return stripeSingleton
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error('stripe secret key is not defined')
  }
  stripeSingleton = new Stripe(key)
  return stripeSingleton
}
