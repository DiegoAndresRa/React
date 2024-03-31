import './Home.css'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
export function Home(){
    const { name } = useParams()
    return(
        <>
            <header>
                <i><FontAwesomeIcon icon={faUser}/></i>
                <h1 className='userName'>{name}</h1>
            </header>
            <div className='workContent'>

            </div>
        </>
    )
}