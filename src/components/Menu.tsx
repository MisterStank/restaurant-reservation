import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className="h-16 w-screen bg-primary fixed top-0 right-0 z-30 flex flex-row">
        <div className='w-[50%] flex flex-row font-bold text-xl'>
            <MenuItem title='Restaurant Reservation' pageRef='/booking' />
        </div>
        <div className='w-[50%] flex flex-row-reverse font-semibold'>
            <MenuItem title='log-in' pageRef='/log-in'/>
            <MenuItem title='new reservation' pageRef='/reserve' />
        </div>
    </div>
  )
}

export default Menu