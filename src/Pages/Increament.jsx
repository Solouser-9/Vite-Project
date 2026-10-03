import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;
    default:
      return state;
  }
}

const Increament = () => {
  
  const [ count, dispatch ] = useReducer(reducer, 0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {() => dispatch({type: "Increase"})}>Increase</button>
    </div>
  )
}

export default Increament