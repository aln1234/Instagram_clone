import { useEffect, useState } from "react"
import faker, { company } from "faker"

import {  useSession } from "next-auth/react"


function Suggestion() {
    const {data: session} = useSession();
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {

        const suggestions = [...Array(5)].map((_,i) => ( {
            ...faker.helpers.contextualCard(),
            id:i,
        }
    
        ))
        setSuggestions(suggestions);
     
     }, [])



    return (
        <div className="ml-10 mt-4">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold cursor-pointer"> See All</button>
            </div>

            {
                suggestions.map((profile) =>(

                    <div
                    key={profile.id}
                    className="flex items-center justify-between mt-3"
                    >
                        <img className="w-10 h-10
                         rounded-full border p-[2px]"
                        src={profile.avatar}/>



                        <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">
                            {profile.username}
                                </h2>
                            <h3 className="text-xs text-gray-400 truncate-6">
                                Works at {profile.company.name}

                            </h3>
                            
                            </div>
                            <button className="text-blue-400 font-semibold">Follow</button>

                        </div>

                ) )
            }
            
        </div>
    )
}

export default Suggestion
