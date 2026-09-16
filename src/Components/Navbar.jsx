import { Link } from "react-router-dom"
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
        <button onClick = {handleMode}>{mode ? "light" : "dark"}</button>
      </ul>
    </div>
  )
}

export default Navbar