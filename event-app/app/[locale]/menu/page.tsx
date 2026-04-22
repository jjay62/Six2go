import Header from '@/components/header';
import Footer from '@/components/footer';
import BigMenu from '@/components/bigmenu';
import { createClient } from '@/lib/server'
import SecretFeature from '@/components/secretFeature';
import { Suspense } from 'react';
export default async function MenuPage() {
  const supabase = await createClient()
  const { data: bigMenu } = await supabase
    .from('menu_items')
    .select('*')
    .order('id')
    

  return (
  <>
      <Header />
      <BigMenu items={bigMenu ?? []} />

      <div className="mb-6"></div>
        <Suspense fallback={<div>Loading Wheel...</div>}>
          <SecretFeature items={bigMenu || []}  />
        </Suspense>
      <Footer />
    </>
  );
}