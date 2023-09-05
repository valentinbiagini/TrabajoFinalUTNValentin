import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Footer.jsx'
import './index.css'
import { Navbar } from './navbar/Navbar.jsx'
import { Section1 } from './section1/Section1.jsx'
import { Section2 } from './Section2/Section2.jsx'
import { Section3 } from './Section3/Section3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar /> 
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
  </React.StrictMode>,
)
