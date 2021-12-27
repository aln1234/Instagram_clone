import { getProviders, signIn as signIntoProvider} from "next-auth/react"
import Header from "../../components/Header";



function signin({providers}) {
    return (
        <div>
            {/* <h1>Sign In</h1> */}
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-2 py-2 mt-48">


                <img src="https://links.papareact.com/ocw"
                alt="Instagram Picture"
                className="w-80"
                />

            
            <div className="mt-20">
            {
                Object.values(providers).map ((provider) => (
                    <div key={provider.name}>

                        <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIntoProvider
                        (provider.id,{callbackUrl:"/"})
                        }>
                            Sign in with {provider.name}
                        </button>

                    </div>
                )
                )
            }
            </div>
            </div>
        </div>
    )
}


export async function getServerSideProps () {
    const providers = await getProviders();

    return {
        props:{
            providers
        }

    }
}

export default signin
