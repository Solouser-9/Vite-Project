import { useState } from "react"
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

  return (
    <div>
      {/* <Navbar logo="HomeLogo" /> */}
      {/* <Hero title={section} num={nums} /> */}
      <Hero title="Home" />
      <button onClick = {handleShow} > { show ? <FaMehRollingEyes size = "20px"/> : <FaRegMehRollingEyes size = "20px"/>} </button>
    </div>
  )
}

export default Home