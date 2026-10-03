
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill in all fields")
      return
    }

    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Email:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Enter your email"
        />
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login