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




const cards = [
  { id: 1, title: "Why us?", desc: "Cheap and all around the world food options.", icon: <CashIcon /> },
  { id: 2, title: "Is it fast?", desc: "100% we got Max Verstappen as our driver.", icon: <RaceCarIcon /> },
  { id: 3, title: "Why would I ever order from here?", desc: "everyone loves food and wants to meet Max right?.", icon: <QuestionIcon /> },
];

export default async function Home() {



  const { data: FourFood } = await supabase
  .from('menu_items')
  .select('*')
  .order('id')
  .limit(4) // Use diffrent items later using select for now just use limit it should be normal items burger, pizza, pasta, meal deal

  const { data: smallMenu } = await supabase
  .from('menu_items')
  .select('*')
  .order('id')
  .limit(8) // Use diffrent items later using select for now just use limit no choices for now but probably the same as the 4 except double the amount
  // FIX ISSUE WITH FOOD ITEMS NOT SHOWING UP BECAUSE LIMIT IS 8 FILTER DOESNT WORK ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  return (
    <div>
      <Header />
      <Hero />
      <TopChoices />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-8 mb-12">
        {FourFood?.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
      <AboutSection />

      <SmallMenu items={smallMenu ?? []} />


      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 py-4 justify-items-center md:justify-items-stretch">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
