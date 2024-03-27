import { Button } from './Button'
import './App.css'

export function App() {
  const sumaNumeros=(num1,num2)=>{
      return num1+num2
  }
  return (
      <>
        <h1>Hola Mundo</h1>
        <Button id="01" sumar={sumaNumeros} ></Button>
      </>
  )
}
