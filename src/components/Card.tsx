import React from 'react'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

function Card({ restaurantName, imgSrc }: { restaurantName: string, imgSrc: string }) {
  return (
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg'> 
          <Image src={imgSrc}
            alt='restaurant card'
            fill={true}
            className='object-cover rounded-t-lg' />
      </div>
      <div className='w-full h-[30%] p-[20px] font-sans font-bold text-#333 text-lg'>{restaurantName}</div>
    </InteractiveCard>
  )
}

export default Card