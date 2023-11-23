import React from 'react'
import MenuItem from './MenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

async function Menu() {
 
  const session = await getServerSession(authOptions)
 
  return (
    <div className="h-16 w-screen bg-primary fixed top-0 right-0 z-30 flex flex-row">
        <div className='w-[50%] flex flex-row font-bold text-xl'>
            <MenuItem title='Restaurant Reservation' pageRef='/' />
        </div>
        <div className='w-[50%] flex flex-row-reverse font-semibold'>
            {
              session?
              <Link href="/api/auth/signout"> 
                <div className='flex w-120 h-full items-center justify-center text-center mx-5  text-secondary'>
                  Sign-out
                </div>
              </Link>
              :
              <div className='flex flex-row-reverse'>
              <Link href="/api/auth/signin">
                <div className='flex w-120 h-full items-center justify-center text-center mx-5  text-secondary'>
                  Sign-in
                </div>
              </Link>
              <Link href="/register">
              <div className='flex w-120 h-full items-center justify-center text-center mx-5  text-secondary'>
                Register
              </div>
            </Link></div>                   
            } 
            <MenuItem title='my reservations' pageRef='/myreservation' />
            <MenuItem title='new reservation' pageRef='/restaurant' />
        </div>
    </div>
  )
}

export default Menu