import { Home } from './Home'
import { Login } from  './Login'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css' 

export function App(){
  return(
    <>
      <Routes>
        <Route path='/home/:name' element={ <Home/> }/>
        <Route path='/' element={ <Login/> }/>
      </Routes>
    </>

  )
}