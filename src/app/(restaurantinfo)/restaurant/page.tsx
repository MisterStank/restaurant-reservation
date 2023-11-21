import getRestaurants from "@/libs/getRestaurants"
import RestaurantCatalog from "@/components/RestaurantCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function Hospital() {
  const restaurants = getRestaurants()
  return (
    <main className="text-center p-5">
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
      <h1 className="text-xl font-medium">Select restaurant</h1>
        <RestaurantCatalog restaurantJson={restaurants}/>
      </Suspense>
    </main>
  )
}