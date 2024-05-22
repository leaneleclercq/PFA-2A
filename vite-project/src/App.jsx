import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const { userName, coords, agence } = require('./ep');

function App() {

  return (
    <>
      <div>
         <p>
            (`${userName} ${coords}`)
          </p>
      </div>
    </>
  )
}

export default App
