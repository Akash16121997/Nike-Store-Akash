import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import {heroapi ,popularsales, toprateslaes,highlight, sneaker, story, footerAPI} from '../src/Data/Data.js'
import Sales from './Components/Sales.jsx'
import FlexContents from './Components/FlexContents.jsx'
import Stories from './Components/Stories.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Cart from './Components/Carts.jsx'
import Carts from './Components/Carts.jsx'

function App() {


  return (
    <>
  
    <Navbar/>
    <Carts/>
    <main className=' flex flex-col  relative '>
                
                <Hero heroapi ={heroapi} />
                <Sales endpoint={popularsales} ifExists/>
                <FlexContents endpoint ={highlight}/>
                <Sales endpoint ={toprateslaes} />
                <FlexContents endpoint ={sneaker}/>
                <Stories story ={story} />
                
        </main>
        <Footer footerAPI={footerAPI}/>
    
     
    </>
  )
}

export default App
