import { Link } from "react-router-dom"
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import "./Navbar.css"

const Navbar = (/* {logo} */ {handleMode, mode}) => {
  return (
    <div className = "container">
      {/* <h1>{logo}</h1> */}
      <h1>Logo</h1>
      <ul>
        <Link to = "/"> <li>Home</li></Link>
        <Link to = "/about"><li>About</li></Link>
        <Link to = "/contact"><li>Contact</li></Link>
        <Link to = "/faq"><li>Faq</li></Link>
        <Link to = "/page"><li>Page</li></Link>
        <button onClick = {handleMode} className= {mode ? "button light" : "button dark"}>{mode ? <FaMoon /> : <IoIosSunny /> }</button>
      </ul>
    </div>
  )
}

export default Navbar