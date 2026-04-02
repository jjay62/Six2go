import Header from '@/components/header';
import Footer from '@/components/footer';
import BigMenu from '@/components/bigmenu';
import { createClient } from '@/lib/server'

export default async function MenuPage() {
  const supabase = await createClient()
  const { data: bigMenu } = await supabase
    .from('menu_items')
    .select('*')
    .order('id')
    

  return (
    <div>
      <Header />
      <BigMenu items={bigMenu ?? []} />
      <Footer />
    </div>
  );
}