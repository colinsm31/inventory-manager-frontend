import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Searchbar from './components/Searchbar/Searchbar';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'/>
        <Route path='/total-inventory'/>
      </Routes>
      <main>
        <div className="logo">
          Logo
        </div>
        <div className="main-container">
          <Searchbar />
        </div>
        <Sidebar />
      </main>
    </>
  )
}

export default App
