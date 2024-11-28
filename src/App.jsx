import React from 'react'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Questions from './Pages/Questions'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path='services' element={<Services/>} />
        <Route path='booksomeone' element={<Questions/>} />

        </Route>
      </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App;