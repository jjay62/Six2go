import { redirect } from 'next/navigation'
import { stripe } from '@/app/lib/stripe.js'
import Link from 'next/link'

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
        Thanks for ordering from six2go! We will send it as soon as possible.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline">Go back to the home page</Link>
      </section>
    )
  }
}