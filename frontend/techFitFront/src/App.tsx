import React from 'react'
import Header from './components/header/Header';
import FirstSession from './components/body/FirstSession';
import SecondSession from './components/body/SecondSession';
import ThirdSession from './components/body/ThirdSession';
import './styles/App.css';



function App() {

  return (
    <>
      <Header />

      <div className='containerGeral'style={{ border: "1px solid #000" }}>
          <FirstSession />
          <SecondSession />
          <ThirdSession />
      </div>

    </>
  )
}

export default App
