import { useState } from "react"
export default function UsernameForm(){
    const [ username, setUsername ] = useState('')

    function handleFormSubmit(e){
        e.preventDefault()
        console.log({username})
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <form className="text-center" onSubmit={handleFormSubmit}>
                <h1 className="text-xl mb-2">Pick a username</h1>
                <input 
                type="text" 
                placeholder={'username'} 
                className="block mb-1 bg-twitterBorder px-3 py-1 rounded-full" 
                value={username}
                onChange={e => {setUsername(e.target.value)}}
                />
                <button className="block bg-twitterBlue w-full rounded-full py-1">Continue</button>
            </form>
        </div>
    )
}