"use client"
import { removeReservation } from "@/redux/features/cartSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function ReservationCart() {
     const restaurantItems = useAppSelector((state) => state.cartSlice.restaurantItems)
     const dispatch = useDispatch<AppDispatch>()
     return (
        <>
        {
            restaurantItems.map((ReservationItem)=> (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={ReservationItem.location}>
                    <div className="text-xl">{ReservationItem.location}</div>
                    <div className="text-sm">Booking Date: {ReservationItem.reserveDate}</div>
                    <div className="text-sm">Number of guests: {ReservationItem.numOfGuests}</div>
                    <div className="flex flex-row mt-5">
                    <button
                        className="block rounded-full bg-primary hover:bg-accent px-3 py-2
                        shadow-sm text-white" onClick={()=>dispatch(removeReservation(ReservationItem))}
                    >
                        Remove
                    </button>
                    <Link href={`/restaurant`}>
                    <button
                        className="block rounded-full mx-1 bg-primary hover:bg-accent px-3 py-2
                        shadow-sm text-white"
                    >
                        Edit
                    </button>
                    </Link>
                    </div>
                </div>

            ))
        }
        </>
     )

}