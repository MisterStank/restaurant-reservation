import { dbConnect } from "@/db/dbConnect"
import Restaurant from "@/db/models/Restaurant"
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

async function AddRestaurantForm() {
    const addRestaurant =async (addRestaurantForm:FormData) => {
        "use server"
        const name = addRestaurantForm.get("name")
        const address = addRestaurantForm.get("address")
        const foodtype = addRestaurantForm.get("foodtype")
        const province = addRestaurantForm.get("province")
        const postalcode = addRestaurantForm.get("postalcode")
        const tel = addRestaurantForm.get("tel")
        const picture = addRestaurantForm.get("picture")
        

        try {
            await dbConnect()
            const restaurant = await Restaurant.create({
                "name": name,
                "address": address,
                "foodtype": foodtype,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture,
            })
        }
        catch(error) {
            console.log(error)
        }
        revalidateTag("restaurants")
        redirect("/restaurant")
    }

    return (
    <form className="justify-center" action={addRestaurant}>
                    <div className='text-xl text-blue-700'>Add Restaurant</div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='name'>
                            Name</label>
                        <input type='text' required id="name" name="name" placeholder='Restaurant name' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='foodtype'>
                            Foodtype</label>
                        <input type='text' required id="foodtype" name="foodtype" placeholder='foodtype' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='address'>
                            Address</label>
                        <input type='text' required id="address" name="address" placeholder='address' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>

                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='province'>
                            Province</label>
                        <input type='text' required id="province" name="province" placeholder='province' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='postalcode'>
                            Postalcode</label>
                        <input type='text' required id="postalcode" name="postalcode" placeholder='postalcode' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='tel'>
                            Tel</label>
                        <input type='text' required id="tel" name="tel" placeholder='tel' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='picture'>
                            Picture</label>
                        <input type='text' required id="picture" name="picture" placeholder='URL' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 
                    text-white p-2 rounded'>Add New Restaurant</button>
                </form>
  )
}

export default AddRestaurantForm