import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export function Login(){
    const [userName, setUserName] = useState('')
    return(
        <main className="mainLogin">
            <h1 className="welcomMessage">¡Welcom!</h1>
            <form >
                <h3 className="userTarget">User:</h3>
                <input onChange={(event)=>{setUserName(event.target.value)}} type="text" label='user' />
                <button> <Link to={`/home/${userName}`}> sign in </Link> </button>
            </form>
        </main>
    )
}