
import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
    const {data: session} = useSession();

    return (
        <div className=" flex items-center justify-between mt-14 ml-10">
            <img src={session?.user?.image}
            className="rounded-full border p-{2px} w-16 h-16" />
            <div className="p-4">
                <h1 className="font-bold capitalize">{session?.user?.name}</h1>
                <h3 className="text-xs text-gray-500">Welcome to Instagram</h3>
            </div>
            {
            session ? (
                <button onClick={signOut} className="text-blue-500 text-sm font-bold">Sign Out</button>

            ):(
                <button onClick={signOut} className="text-blue-500 text-sm font-bold">Sign In</button>

            )
            }
           
        </div>
    )
}

export default MiniProfile
