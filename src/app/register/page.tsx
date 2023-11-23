import { dbConnect } from "@/db/dbConnect"
import User from "@/db/models/User"
import userRegister from "@/libs/userRegister"
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

async function AddUserForm() {
    const addUser =async (addUserForm:FormData) => {
        "use server"
        const name = addUserForm.get("name");
        const email = addUserForm.get("email")
        const tel = addUserForm.get("tel")
        const password = addUserForm.get("password")
        const role = "user"
        const createdAt = Date.now();
        try{
            const user = await userRegister(name,email,password,tel,role,createdAt);
        }catch(error){
            console.log(error);
        }
        /*
        try {
            await dbConnect()
            const user = await User.create({
                "name": name,
                "email": email,
                "tel": tel,
                "role": role,
                "password": password,
                "createdAt": createdAt
            })
            console.log(user);
        }
        catch(error) {
            console.log(error)
        }*/
        revalidateTag("register")
        redirect("/")
    }

    return (
    <div className="mt-20">
    <form className="m-5 flex flex-col justify-center" action={addUser}>
                    <div className='text-xl font-bold text-gray-500'>Add User</div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='name'>
                            Name</label>
                        <input type='text' required id="name" name="name" placeholder='User name' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex items-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='email'>
                            Email</label>
                        <input type='text' required id="email" name="email" placeholder='email' 
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
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='password'>
                            password</label>
                        <input type='password' required id="password" name="password" placeholder='password' 
                        className='bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <button type="submit" className='bg-primary hover:bg-accent
                    text-white p-2 rounded'>Add New User</button>
                </form>
                </div>
  )
}

export default AddUserForm