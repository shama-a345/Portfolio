import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Experiences, Footer, Home, Navbar, Projects, Skill } from './Pages'

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Experiences' element={<Experiences />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
    
  )
}

export default App