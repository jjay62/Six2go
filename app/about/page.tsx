import Header from '@/components/header';
import Footer from '@/components/footer';
import Card from '@/components/card';
import { CashIcon, RaceCarIcon, QuestionIcon } from '@/components/icons';
export default function AboutPage() {
  const cards = [
    { id: 1, title: "Why us?", desc: "Cheap and all around the world food options.", icon: <CashIcon /> },
    { id: 2, title: "Is it fast?", desc: "100% we got Max Verstappen as our driver.", icon: <RaceCarIcon /> },
    { id: 3, title: "Why would I ever order from here?", desc: "everyone loves food and wants to meet Max right?.", icon: <QuestionIcon /> },
  ];
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6 border-b border-white/60 pb-4 ">Six2go</h1>
        <p className="text-foreground/80 mb-4">
          Founded in the year of the floating pumpkin.
        </p>
        <div className="space-y-4 text-foreground/90 ">
          <p>
            Plan.AI was dreamed up by a committee of office plants during a particularly sunny
            Tuesday afternoon. Our mission? To replace all human event planners with cheerful
            chatbots that occasionally quote Shakespeare.
          </p>
          <h2 className="text-lg font-semibold mt-6 border-b border-white/20 pb-4">Our Secret Origins</h2>
          <p>
            Legend has it we started in a basement somewhere near a coffee machine. The coffee
            machine is now our CTO. It runs on espresso and existential dread.
          </p>
          <h2 className="text-lg font-semibold mt-6 border-b border-white/20 pb-4">Why Rubber Ducks?</h2>
          <p>
            Every team meeting begins with a rubber duck presentation. We're not sure why either,
            but the ducks seem happy and productivity has gone up 3% (margin of error: 47%).
          </p>
          <h2 className="text-lg font-semibold mt-6 border-b border-white/20 pb-4">The Future</h2>
          <p className="mb-12 mt-6 border-b border-white pb-4">
            We're building toward a world where calendars schedule themselves, emails write back,
            and nobody ever has to attend a meeting that could have been a memo. Or a nap.
          </p>
        </div>
              
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6 py-6 justify-items-center md:justify-items-stretch">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      </main>
      <Footer />
    </div>
  );
}
