import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestion from "./Suggestion"


import { signOut, useSession } from "next-auth/react"


function Feed() {

    const {data: session} = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
            {/* section */}
            <Stories/>
            {/* stories */}

            {/* posts */}
            <Posts/>

            </section>

          

{
    session && (
        <section className="hidden xl:inline-grid md:col-span-1">
       
        <div className="fixed top-20">
        <MiniProfile/>
        {/* <Suggestion/> */}
        <Suggestion/>
        </div>
           
        {/* suggesstion */}
           
   
       </section>
   

    )
}
   

   



            
        </main>
    )
}

export default Feed
