import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './views/Home'
import { Header } from './views/Header'
import { PizzaBuilder } from './components/PizzaBuilder'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/home' element={<PizzaBuilder />} />
    </Routes>
    </>
  )
}

export default App
