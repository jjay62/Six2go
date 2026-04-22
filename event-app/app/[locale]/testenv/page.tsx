'use server'
// app/[locale]/testenv/page.tsx (or wherever your TestEnv is)
import React, { Suspense } from 'react';
import { createClient } from '@/lib/server'
import SecretFeature from '@/components/secretFeature'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useTranslations } from 'next-intl';

const TestEnv = async () => {
  const supabase = await createClient();
  
  // Ensure this is fully awaited
  const { data: menuItems, error } = await supabase
    .from('menu_items')
    .select('*')
    .order('id');

  if (error) return <div>Error loading items</div>;

  return (
    <div> 
        <Header />
      {/* Wrapping in Suspense helps React handle the transition 
         from the Server data to the Client interactivity.
      */}
      <Suspense fallback={<div>Loading Wheel...</div>}>
        <SecretFeature items={menuItems || []}  />
      </Suspense>
      <Footer />
    </div>
  );
};

export default TestEnv;