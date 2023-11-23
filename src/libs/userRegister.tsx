export default async function userRegister(userName : string ,userEmail:string, userPassword:string,userTel : string , userRole : string , userCreatedAt : Date) {
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
        next: {tags:['auth/register']},
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON. stringify({
            name: userName,
            email: userEmail,
            tel: userTel,
            role: userRole,
            password: userPassword,
            createdAt: userCreatedAt
        }),
    })
    
    if(!response.ok) {
        throw new Error("Failed to register ")
    }
    return await response.json()
}