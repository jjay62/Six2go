import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage() {
  const t = await getTranslations('Privacy')
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
        <p className="text-foreground/80 mb-4">
          {t('lastUpdated')}
        </p>
        <div className="space-y-4 text-foreground/90">
          <p>{t('intro')}</p>
          <h2 className="text-lg font-semibold mt-6">{t('collectHeading')}</h2>
          <p>{t('collectText')}</p>
          <h2 className="text-lg font-semibold mt-6">{t('useHeading')}</h2>
          <p>{t('useText')}</p>
          <h2 className="text-lg font-semibold mt-6">{t('contactHeading')}</h2>
          <p>{t('contactText')}</p>
        </div>
        <Link href="/" className="inline-block mt-8 text-blue-500 hover:underline">
          {t('backToHome')}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
