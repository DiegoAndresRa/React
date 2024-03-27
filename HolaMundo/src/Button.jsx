import { useEffect, useState } from "react";
import { ButtonReset } from "./ButtonRest";

export function Button({sumar, id}) {

  const [click, setClick] = useState(0);
  const [sum, setSum] = useState(0);

  const name = click!=0 ? sum : 'Sumar'

  useEffect(()=>{
    if (!click) return setSum(0);
    setSum(sumar(sum,1))
  },[click])

  return (
    <div className="div-buttons">
        <button onClick={()=>setClick(click => click+1)} id={"button"+id} >
            {name}
        </button>
        <ButtonReset setClick={setClick}></ButtonReset>
    </div>
  );
}
