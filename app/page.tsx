import Header from '@/components/header';
import Footer from '@/components/footer';
import Card from '@/components/card';
import Hero from '@/components/hero';
import { CashIcon, RaceCarIcon, QuestionIcon } from '@/components/icons';
import '@/app/globals.css';
import FoodItem from '@/components/fooditem';
import { supabase } from '@/app/lib/supabase'
import AboutSection from '@/components/aboutsection';
import TopChoices from '@/components/topchoices';
import SmallMenu from '@/components/smallmenu';
import Faqsection from '@/components/faqsection';


const cards = [
  { id: 1, title: "Why us?", desc: "Cheap and all around the world food options.", icon: <CashIcon /> },
  { id: 2, title: "Is it fast?", desc: "100% we got Max Verstappen as our driver.", icon: <RaceCarIcon /> },
  { id: 3, title: "Why would I ever order from here?", desc: "everyone loves food and wants to meet Max right?", icon: <QuestionIcon /> },
];

export default async function Home() {



  const { data: FourFood } = await supabase
  .from('menu_items')
  .select('*')
  .order('id')
  .in("id", [1, 6, 10, 17])

  const { data: smallMenu } = await supabase
  .from('menu_items')
  .select('*')
  .order('id')
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1f2937]">
      <Header />
      </div>
      <Hero />
      <TopChoices />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-8 mb-12">
        {FourFood?.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
      <AboutSection />

      <SmallMenu items={smallMenu ?? []} />

      <Faqsection />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 py-4 justify-items-center md:justify-items-stretch">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <Footer />
    </>
  );
}
