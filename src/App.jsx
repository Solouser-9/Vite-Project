import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Faq from "./Pages/Faq"
import Navbar from "./Components/Navbar"
import './App.css'

function App() {

  let [ mode, setMode ] = useState(false)

  function handleMode () {
    setMode(!mode)
  }

  return (
    <Router>
      <div className = {mode ? "app dark" : "app light"}>
        <Navbar handleMode = {handleMode} mode = {mode}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App