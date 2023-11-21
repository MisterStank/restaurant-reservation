import Link from "next/link"
import Card from "./Card"

export default async function RestaurantCatalog ({restaurantJson}:{restaurantJson:Object}) {
  const restaurantJsonReady = await restaurantJson
  return (
    <>
        <div style={{margin:"20px", display:"flex",
          flexDirection:"row", alignContent:"space-around",
          justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {
              restaurantJsonReady.data.map((restaurantItem:Object)=>(
                <Link href={`/restaurant/${restaurantItem.id}`} className="w-1/5">
                  <Card restaurantName={restaurantItem.name} imgSrc={restaurantItem.picture}/>
                </Link>
              ))
            }
        </div>
    </>
  )
}