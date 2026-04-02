'use server'

import { revalidatePath } from 'next/cache'
import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import { createClient } from '@/lib/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    redirect({
      href: {
        pathname: '/login',
        query: { error: 'Login failed, please try again' },
      },
      locale: await getLocale(),
    })
  }

  revalidatePath('/', 'layout')
  redirect({ href: '/', locale: await getLocale() })
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    redirect({
      href: {
        pathname: '/login',
        query: { error: 'Signup failed. Please try again.' },
      },
      locale: await getLocale(),
    })
  }

  revalidatePath('/', 'layout')
  redirect({ href: '/', locale: await getLocale() })
}