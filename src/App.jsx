import React from 'react'
import Navbar from './Components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Finddoner from './pages/Finddoner';
import Imgtxt from './pages/Imgtxt';


function App() {
  return (

    <>
      <Router>
      <Navbar/>
          <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/About" element={ <About/> } />
          <Route path="/Login" element={ <Login/> } />
          <Route path='Finddoner' element={<Finddoner/>}></Route>
          <Route path='Imgtxt' element={<Imgtxt/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
