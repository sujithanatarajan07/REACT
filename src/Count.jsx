import {useState,useEffect} from 'react'

function Count() {
    const[count,setCount]=useState(0)
    const btn={
    padding:"10px",
    borderRadius:"10px",
    }
  
}
/*useEffect(() => {
    console.log("useEffect Rendered")
}, [])
useEffect(() => {
    console.log("counter button is pressed")
}, [Count])
useEffect(() => {
   setCount(42)
}) */
function timeout () {
    setTimeout(() => {
        console.log("test")
    }
)
}
return (
    <div style={{textAlign:"center"}}>
        <h1>count:{Count}</h1>
        <button style={btn} onClick={()=> setCount(Count + 1)}>Increment*</button>
        <button style={btn} onClick={()=> setCount(Count -1)}>Decrement</button>
        <button style={btn} onClick={()=> setCount(0)}>RESET</button>
        <button onClick={timeout}>TIMEOUT</button>
        <button onClick={interval}>INTERVAL</button>
    </div>
)

export default Count