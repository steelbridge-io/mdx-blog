import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


import '../styles/global.css'

export default ({ children }) => (
   <div>
     <Header />
     <div className="content">{ children }</div>
     <Footer />
   </div>
)