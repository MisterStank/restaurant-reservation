async function getRestaurants() {
    const response = await fetch(`http://localhost:5000/api/v1/restaurants`)
    if(!response.ok){
        throw new Error("Failed to fetch restaurants")
    }
    return await response.json()
}

export default getRestaurants