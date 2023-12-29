import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Button } from './components/button'
import { Section2 } from './components/section2'
import { Section3a } from './components/section3(a)'
import { Section3b } from './components/section3b'
import { Section3c } from './components/section3c'
import { Section4 } from './components/section4'
import { Footer } from './components/footer'

function App() {
  return (
    <>
     <Navbar/>
     <div className='container-fluid'id='topsection'>
<h1 id='heading'>Generate More Leads with
<br></br> A professional Landing Page</h1>
<br />
<Button/>
      </div>
      <Section2/>
    <div className="container-fluid">
    <div className="row">
      <Section3a/>
    </div>
    <div className="row">
      <Section3b/>
    </div>
    <div className="row">
      <Section3c/>
    </div>
    <div className="row">
      <Section4/>
    </div>
    
    </div>
    <div className='container-fluid'id='topsection'>
    
<h1 id='heading'>Ready to get Started 
Sign Up Now!</h1>
<br />
<Button/>
      </div>
<div className="row footer">
  <Footer/> 
</div>
    </>

  )
}
export default App
