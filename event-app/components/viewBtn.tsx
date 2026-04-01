'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ViewBtn({ menuItemId }: { menuItemId: number }) {
  const t = useTranslations('FoodItem')
  return (
    <Link
      href={`/products/${menuItemId}`}
      className="flex items-center justify-center rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-950 hover:scale-105"
    >
      {t('viewDetails')}
    </Link>
  )
}
