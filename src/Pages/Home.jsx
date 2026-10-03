import { useState, useRef } from "react"
import { FaMehRollingEyes } from "react-icons/fa";
import { FaRegMehRollingEyes } from "react-icons/fa";
/* import Navbar from "../Components/Navbar" */
import Hero from "../Components/Hero"

const Home = () => {
  /* let section = "hero section"
  let nums = 200 */

  let [ show, setShow ] = useState(false)

  function handleShow () {
    setShow(!show)
  }

  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  const headingRef = useRef()

  const handleClick = () => {
    headingRef.current.textContent = "You clicked the button!"
  }
  return (
    <div>
      {/* <Navbar logo="HomeLogo" /> */}
      {/* <Hero title={section} num={nums} /> */}
      <Hero title="Home" />
      <button onClick = {handleShow} > { show ? <FaMehRollingEyes size = "20px"/> : <FaRegMehRollingEyes size = "20px"/>} </button>
      <div>
        <h1 ref = {headingRef}></h1>
        <button onClick={handleClick}></button>
      </div>
      <div>
        <input 
        ref = {inputRef} 
        type = "text" 
        placeholder = "Enter your name"
        />
        <button onClick = {handleFocus}></button>
      </div>
    </div>
  )
}

export default Home