import getRestaurants from "@/libs/getRestaurants"
import RestaurantCatalog from "@/components/RestaurantCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { profile } from "console"
import AddRestaurantForm from "@/components/AddRestaurantForm"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Hospital() {
  const restaurants = getRestaurants()
  const session = await getServerSession(authOptions);
	//const profile = session ? await getUserProfile(session.user.token) : null;
  return (
    <main className="text-center p-5 mt-20">
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
      <h1 className="text-xl font-medium">Select restaurant</h1>
        <RestaurantCatalog restaurantJson={restaurants}/>
      </Suspense>
      {
					//(profile?.data.role == "admin")?
					<AddRestaurantForm/>
				
				}
    </main>
  )
}