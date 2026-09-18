import { useState } from "react"
/* import Navbar from "../Components/Navbar" */
import Hero from "../Components/Hero"

const Faq = () => {

  let [ indexnum, setIndexnum] = useState([{
    question : "What is your name ?",
    answer : "My name is Bakare Abdussalam" 
  },
  {
    question : "What course are you learning ?",
    answer : "MMS"
  },
  {
    question : "When are you ending the course",
    answer : "I don't know"
  }])

  return (
    <div>
      {/* <Navbar logo="FaqLogo" /> */}
      <Hero title="FAQ" />
      {indexnum.map((item)=>(
        <div key={item}>
        <h1>{item.question}</h1>
        <h3>{item.answer}</h3>
        </div>
      ))}
    </div>
  )
}

export default Faq