'use client'

import { login, signup } from './actions'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function LoginForm() {
  const t = useTranslations('Login')
  const searchParams = useSearchParams()
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [error, setError] = useState(searchParams.get('error') || '')
  const [message, setMessage] = useState(searchParams.get('message') || '')
  const [showAlert, setShowAlert] = useState(true)
  const clearParams = () => {
    setError('')
    setMessage('')
    setShowAlert(false)
    router.replace('/login', { scroll: false })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image src="/logooooo.png" alt="six2go" width={150} height={10} priority />
          </Link>
          </div>
          {showAlert && (
          <div className="text-center flex items-center justify-center mb-12 border border-white/20 bg-red-700/80 rounded-md px-2 py-2">
            <p className="text-sm font-bold text-white mb-1">{t('bannerText')}</p>
            <button
              type="button"
              onClick={() => { clearParams() }}
              className="ml-3 text-red-200 hover:text-white hover:scale-120 bg-white/20 rounded-full px-3 py-2 transition-colors text-md leading-none"
              style={{ display: showAlert ? 'block' : 'none' }}
            >
              {t('dismiss')}
            </button>
          </div> )}
        <div className="flex mb-6 rounded-lg overflow-hidden border border-white/20">
          <button
            type="button"
            onClick={() => { setMode('login'); clearParams() }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              mode === 'login'
                ? 'bg-[#2992CF] text-white'
                : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('signIn')}
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); clearParams() }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              mode === 'signup'
                ? 'bg-[#2992CF] text-white'
                : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('createAccount')}
          </button>
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">
          {mode === 'login' ? t('welcomeBack') : t('createYourAccount')}
        </h2>
        <p className="text-sm text-white/40 mb-6">
          {mode === 'login' ? t('subtitleLogin') : t('subtitleSignup')}
        </p>
        {error && (
          <div className="flex items-center justify-between bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm mb-4">
            <span>{error}</span>
            <button
              type="button"
              onClick={clearParams}
              className="ml-3 text-red-200 hover:text-white hover:scale-120 bg-white/20 rounded-full px-3 py-2 transition-colors text-lg leading-none"
              aria-label={t('dismissError')}
            >
              {t('dismiss')}
            </button>
          </div>
        )}

        {message && (
          <div className="flex items-center justify-between bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg text-sm mb-4">
            <span>{message}</span>
            <button
              type="button"
              onClick={clearParams}
              className="ml-3 text-green-200 hover:text-white transition-colors text-lg leading-none"
              aria-label={t('dismissMessage')}
            >
              {t('dismiss')}
            </button>
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-white/70 mb-1">{t('emailLabel')}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-[#2992CF] focus:outline-none"
              placeholder={t('emailPlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white/70 mb-1">{t('passwordLabel')}</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-[#2992CF] focus:outline-none"
              placeholder={t('passwordPlaceholder')}
            />
          </div>

          <button
            formAction={mode === 'login' ? login : signup}
            className="w-full rounded-lg bg-[#2992CF] px-4 py-3 text-white font-semibold hover:bg-[#2378AB] transition-colors"
          >
            {mode === 'login' ? t('signIn') : t('createAccount')}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-white/30 hover:text-white/50 transition-colors">
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
