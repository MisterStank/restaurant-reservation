'use client'
import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Banner() {
  const covers = ['/restaurant1-min.jpg', '/restaurant2-min.jpg', '/restaurant3-min.jpg']
  const [index, setIndex] = useState(0)


  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image src={covers[index % 3]}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1>Reserve your favorite restaurants</h1>
      </div>

    </div>
  )
}

export default Banner