import { useState } from 'react'
import Header from './components/header/Header';
import FirstSession from './components/body/FirstSession';
import './styles/App.css';



function App() {

  return (
    <>
      <Header />

      <div className='containerGeral' style={{ border: "1px solid #000" }}>
        <FirstSession />

      </div>

      


 

      
    </>
  )
}

export default App
