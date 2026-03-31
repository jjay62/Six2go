import Link from 'next/link'
import { createClient } from '@/app/lib/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { CartIcon } from './cartIcon'


export async function getTotalItems() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: cartItems } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('user_id', user.id)
  return cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
}

async function signOut() {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

const Header = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const totalItems = user ?await getTotalItems() : 0

  return (
    <>

    <div className='flex justify-center items-center text-bold text-1xl tracking-widest bg-blue-900 py-1.5'>
    <h3 className='scrolling-text'>NOW ALL DESSERTS ARE €6,50</h3>
    
  </div>
<div className="border-b border-white/20 px-6 py-4 text-white bg-[#1c2433]">
  <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
    <Link href="/" className="flex items-center w-fit" aria-label="logo">
    <Image src="/logooooo.png" alt="six2go" width={120} height={10} priority />
    </Link>
    <nav className="flex gap-10 justify-center">
      <Link href="/" className="text-white hover:text-blue-500 text-lg hover:underline">Home</Link>
      <Link href="/menu" className="text-white hover:text-blue-500 text-lg hover:underline">Menu</Link>
      <Link href="/about" className="text-white hover:text-blue-500 text-lg hover:underline">About</Link>
    </nav>
    <div className="flex flex-row flex-nowrap  justify-center items-center gap-3">
      {user ? (
        <>
          <span className="text-sm text-white/60 truncate max-w-[150px]">{user.email}</span>
          <form action={signOut}>
            <button className="text-sm bg-blue-800 hover:bg-blue-900 px-3 py-1.5 rounded-md transition-colors">
              Sign out
            </button>
          </form>
        </>
      ) : (
        <Link
          href="/login"
          className="text-md bg-blue-800 hover:bg-blue-900 px-4 py-1.5 rounded-md transition-colors font-bold"
        >
          Log in
        </Link>
      )}


      <div className="ml-8 flex gap-6 flex justify-end items-center">
      <CartIcon totalItems={totalItems} />
    <div>
      <Link href="/menu" className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors font-medium">
        Order now
      </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Header;
