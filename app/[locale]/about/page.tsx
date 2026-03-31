import Header from '@/components/header';
import Footer from '@/components/footer';
import Card from '@/components/card';
import Faqsection from '@/components/faqsection';
import { CashIcon, RaceCarIcon, QuestionIcon } from '@/components/icons';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const tc = await getTranslations('Cards');

  const cards = [
    { id: 1, title: tc('card1Title'), desc: tc('card1Desc'), icon: <CashIcon /> },
    { id: 2, title: tc('card2Title'), desc: tc('card2Desc'), icon: <RaceCarIcon /> },
    { id: 3, title: tc('card3Title'), desc: tc('card3Desc'), icon: <QuestionIcon /> },
  ];

  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-white/50 mb-8">{t('founded')}</p>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">{t('storyHeading')}</h2>
          <p>{t('storyP1')}</p>
          <p>{t('storyP2')}</p>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">{t('missionHeading')}</h2>
          <p>{t('missionP')}</p>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">{t('howItWorksHeading')}</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>{t('howStep1')}</li>
            <li>{t('howStep2')}</li>
            <li>{t('howStep3')}</li>
            <li>{t('howStep4')}</li>
          </ol>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">{t('whyHeading')}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('whyPoint1')}</li>
            <li>{t('whyPoint2')}</li>
            <li>{t('whyPoint3')}</li>
            <li>{t('whyPoint4')}</li>
          </ul>
        </section>
      <div className=" flex justify-center items-center ">
      <Faqsection />
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto py-6 justify-items-center md:justify-items-stretch">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
