import { useState } from "react"
/* import Navbar from "../Components/Navbar" */
import Hero from "../Components/Hero"

const Contact = () => {

  let [ personalinfo, setPersonalinfo ] = useState([{
    name : "Bakare Abdussalam",
    age : 16,
    dateOfBirth : new Date(2010, 0, 26),
    course : "MMS",
    courseStart : new Date(2025, 0, 6),
    courseEnd: new Date(2027, 0, 6)
  },
  {
    name : "Bakare Sumayyah",
    age : 16,
    dateOfBirth : new Date(2010, 0, 26),
    course : "MMS",
    courseStart : new Date(2025, 0, 6),
    courseEnd: new Date(2027, 0, 6)
  },
  {
    name : "Aighobahi Destiny",
    age : 18,
    dateOfBirth : new Date(2008, 0, 26),
    course : "MMS",
    courseStart : new Date(2025, 0, 6),
    courseEnd: new Date(2027, 0, 6)
  }])

  return (
    <div>
      {/* <Navbar logo="ContactLogo" /> */}
      <Hero title="Contact" />
      {personalinfo.map((item, index)=>(
        <div key={index} /*The key is used to make react(useState) keep track of the changes and it can only be used with a tag e.g <div></div> not an empty fragment <></>- They are used to cover multiple element tags in a return so that react knows that there are multiple tags there*/>
        <h2>Name: {item.name}</h2>
        <h3>Age: {item.age}</h3>
        <h3>DOB: {item.dateOfBirth.toLocaleDateString()}</h3>
        <h3>Course: {item.course}</h3>
        <h3>Course start: {item.courseStart.toLocaleDateString()}</h3>
        <h3>Course end: {item.courseEnd.toLocaleDateString()}</h3>
        </div>
      ))}
    </div>
  )
}

export default Contact