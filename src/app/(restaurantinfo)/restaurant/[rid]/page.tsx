import Image from 'next/image'
import getRestaurant from '@/libs/getRestaurant'
import Link from 'next/link'
import { Suspense } from 'react'
import { LinearProgress } from '@mui/material'

export default async function RestaurantDetailPage({ params }: { params: { rid: string } }) {

    const restaurantDetail = await getRestaurant(params.rid)
    return (
        <main className='text-center p-5 font-sans'>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <h1 className='text-lg font-medium'>{restaurantDetail.data.name}</h1>
            <div className='flex flex-row my-5 font-normal text-xl'>
                <Image src={restaurantDetail.data.picture}
                    alt='Restaurant picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black' />
                <div className='text-md text-left mx-5'>
                    {restaurantDetail.data.name}
                    <div>{restaurantDetail.data.address}</div>
                    <div>{restaurantDetail.data.province}</div>
                    <div>{restaurantDetail.data.postalcode}</div>
                    <div>Tel. {restaurantDetail.data.tel}</div>
                    <Link href={`/reserve?id=${params.rid}&name=${restaurantDetail.data.name}`}>
                        <button className="my-5 block rounded-full bg-primary hover:bg-accent
                        px-5 py-2 text-white font-normal shadow-sm">
                        Make Reservation
                        </button>
                    </Link>
                </div>
            </div>
            </Suspense>
        </main>
    )
}

