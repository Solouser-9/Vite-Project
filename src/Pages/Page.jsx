import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Page = () => {
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Full Name:</p>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
          placeholder="Enter your fullname"
        />
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
        <p>Confirm Password:</p>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          placeholder="Confirm your password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Page