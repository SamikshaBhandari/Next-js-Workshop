'use client'

import { loginUser } from "@/action/userAction";


export default function LoginPage() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const something = await loginUser(formData)
        console.log(something)
    }
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen w-screen">
            <h1 > <div className="text-2xl font-bold text-violet-500">Login Page</div></h1>

            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                <input type="text" name='email' className=" h-10 w-200 border-2 " placeholder="Email" />
                <input type="text" name='password' className=" h-10 w-200 border-2 " placeholder="Password  " />
                <button type="submit" className=" h-10 w-200 border-2 bg-blue-500 text-white">Login</button>
            </form>
        </div>
    )

}