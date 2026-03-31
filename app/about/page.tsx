import Header from '@/components/header';
import Footer from '@/components/footer';
import Card from '@/components/card';
import Faqsection from '@/components/faqsection';
import { CashIcon, RaceCarIcon, QuestionIcon } from '@/components/icons';

export default function AboutPage() {
  const cards = [
    { id: 1, title: "Why us?", desc: "Cheap and all around the world food options.", icon: <CashIcon /> },
    { id: 2, title: "Is it fast?", desc: "100% we got Max Verstappen as our driver.", icon: <RaceCarIcon /> },
    { id: 3, title: "Why would I ever order from here?", desc: "Everyone loves food and wants to meet Max, right?", icon: <QuestionIcon /> },
  ];

  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">About six2go</h1>
        <p className="text-white/50 mb-8">Founded in 2026 by Jay62</p>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">Our story</h2>
          <p>
            six2go started with a simple idea: world-class food, delivered to
            your door, at prices that won't empty your wallet. Our
            Michelin-star chefs craft every dish with love, drawing inspiration
            from cuisines across the globe — from Italian wood-fired pizzas to
            Japanese-inspired desserts.
          </p>
          <p>
            What began as a small kitchen experiment has grown into a brand
            trusted by food lovers everywhere. We believe great food creates
            stories, and every plate we serve is a new chapter.
          </p>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">Our mission</h2>
          <p>
            To make restaurant-quality meals accessible to everyone — whether
            you're feeding a family of six or grabbing a quick solo bite.
            Fresh ingredients, fast delivery, zero compromises.
          </p>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Browse our menu and pick your favourites.</li>
            <li>Add them to your cart and head to checkout.</li>
            <li>Pay securely online — we handle the rest.</li>
            <li>Sit back and wait for Max to deliver your order at top speed.</li>
          </ol>
        </section>

        <section className="space-y-4 text-white/90 border-b border-white/20 pb-8 mb-8">
          <h2 className="text-xl font-semibold">Why six2go?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Dishes from 6+ cuisines around the world.</li>
            <li>Prices starting from just a few euros.</li>
            <li>Delivery powered by an actual Formula 1 driver (okay, maybe not literally).</li>
            <li>No subscription — order when you want, how you want.</li>
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
