import { useEffect, useState } from "react"

export function ButtonReset({setClick}){
    const [click, setClicked] = useState(false)

    useEffect(()=>{
        setClick(0)
    },[click])

    return(
        <button onClick={()=>setClicked(!click)}>
            Reset
        </button>
    )
}