"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { addReservation } from "@/redux/features/cartSlice";
import { ReservationItem } from "../../../interfaces";
import Link from "next/link";

function Reserve() {
  const urlParams = useSearchParams()
  const location = urlParams.get('name')
  const dispatch = useDispatch<AppDispatch>()

  const makeReservation = () => {
    if(location && reserveDate){
      const item:ReservationItem = {
        location: location,
        reserveDate: dayjs(reserveDate).format("YYYY/MM/DD"),
        numOfGuests: numOfGuests
      }
      dispatch(addReservation(item))
    }
  }

  const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
  const [numOfGuests, setNumOfGuests] = useState(0)
  return (
    <main className="w-[100%] mt-16 flex flex-col items-center space-y-4">
      <div className="text-xl text-gray-600 mt-5 mb-5 font-bold">
        New Reservation
      </div>
      <div className="text-xl text-gray-600 mt-5 mb-5 font-bold">
        {location}
      </div>
      <div className="w-fit space-y-2">
        <div className="w-[100%] flex flex-row">
          <div className="text-md text-left text-gray-600">Number Of Guests</div>
          <input
            type="number"
            id="numOfGuests"  
            value={numOfGuests}
            onChange={(e) => {
              const inputValue = e.target.value;
              const numericValue = parseInt(inputValue, 10);
          
              if (!isNaN(numericValue)) {
                setNumOfGuests(Math.max(0, numericValue));
              } else {
                setNumOfGuests(0);
              }
            }}
            min="0"
            placeholder="numOfGuests"
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800
              "
          />
          
        </div>
        <div className="text-md text-left text-gray-600">
          Choose Reservation Date
        </div>
        <LocationDateReserve onDateChange={(value:Dayjs)=>{setReserveDate(value)}} />
      </div><Link href="/myreservation">
      <button
        className="block rounded-md bg-primary hover:bg-accent px-3 py-2
        shadow-sm text-white " onClick={makeReservation}
      >
        submit
      </button>
      </Link>
    </main>
  );
}


export default Reserve;