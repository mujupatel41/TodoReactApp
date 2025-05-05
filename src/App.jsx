import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import LudoBoard2 from './LudoBoard2'
import LotteryGame from './LotteryGame'

function App() {
  return (
    <>
    {/* <LudoBoard2 />
    <hr style={{marginBottom: "5rem", marginTop: "5rem"}} /> */}
    <TodoList />
    {/* <LotteryGame /> */}
    </>
  )
}

export default App
