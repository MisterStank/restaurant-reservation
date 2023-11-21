import Image from 'next/image'
import getRestaurant from '@/libs/getRestaurant'

export default async function RestaurantDetailPage({ params }: { params: { rid: string } }) {

    const restaurantDetail = await getRestaurant(params.rid)
    return (
        <main className='text-center p-5 font-sans'>
            <h1 className='text-lg font-medium'>{restaurantDetail.data.name}</h1>
            <div className='flex flex-row my-5 font-normal text-xl'>
                <Image src={restaurantDetail.data.picture}
                    alt='Hospital picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black' />
                <div className='text-md text-left mx-5'>
                    {restaurantDetail.data.name}
                    <div>{restaurantDetail.data.address}</div>
                    <div>{restaurantDetail.data.province}</div>
                    <div>{restaurantDetail.data.postalcode}</div>
                    <div>Tel. {restaurantDetail.data.tel}</div>
                </div>
            </div>
        </main>
    )
}

export async function generalStaticParams() {
    return [{ rid: '001' }, { rid: '002' }, { rid: '003' }]
}