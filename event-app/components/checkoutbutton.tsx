'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function CheckoutButton() {
  const t = useTranslations('CheckoutButton')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function startStripeCheckout() {
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/checkout-sessions', { method: 'POST' })
      const data = (await res.json()) as { url?: string; error?: string }

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? res.statusText)
        return
      }
      if (!data.url) {
        setStatus('error')
        setMessage(t('noUrl'))
        return
      }
      window.location.href = data.url
    } catch (e) {
      setStatus('error')
      setMessage(e instanceof Error ? e.message : t('requestFailed'))
    }
  }

  return (
    <div>
      <button
        type="button"
        disabled={status === 'loading'}
        onClick={startStripeCheckout}
      >
        {status === 'loading' ? t('loading') : t('checkout')}
      </button>
      {status === 'error' && message ? <p role="alert">{message}</p> : null}
    </div>
  )
}
