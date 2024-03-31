import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

export function Login(){
    const [userName, setUserName] = useState('')
    const singIn = useNavigate()

    const handdleSubmit = ()=>{
        console.log(userName)
        if(userName)
            singIn(`/home/${userName}`)
    }
    
    return(
        <main className="mainLogin">
            <h1 className="welcomMessage">¡Welcom!</h1>
            <form >
                <h3 className="userTarget">User:</h3>
                <input onChange={(event)=>{setUserName(event.target.value)}} type="text" label='user' />
                <button onClick={handdleSubmit}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        </main>
    )
}