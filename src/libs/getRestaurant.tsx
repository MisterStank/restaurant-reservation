async function getRestaurant(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${id}`, { next: {tags:['restaurants/${id}']}})
    if(!response.ok){
        throw new Error("Failed to fetch restaurants")
    }
    return await response.json()
}

export default getRestaurant