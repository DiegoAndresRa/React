import { useState, useEffect } from "react";

export function useButton({sumar}){
    const [click, setClick] = useState(0);
    const [sum, setSum] = useState(0);
  
    const name = click!=0 ? sum : 'Sumar'
    console.log(sum)

    useEffect(()=>{
      if (!click) return setSum(0);
      setSum(sumar(sum,1))
    },[click])

    return {click,setClick,label:name}
}