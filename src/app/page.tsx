'use client'
import Banner from '@/components/Banner';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import MenuItem from '@/components/MenuItem';

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Banner/>
      <button className='bg-primary
      font-semibold py-2 px-2 m-2 rounded-full 
      hover:bg-accent hover:text-white hover:border-transparent'
        >
        <MenuItem title='View All Restaurants' pageRef='/restaurant'/>
      </button>
    </main>
  )
}
