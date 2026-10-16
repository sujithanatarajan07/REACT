import {useState} from 'react'
import './Model.css'
function Model() {
    const[Model,setModel]=useState(false) 
    return (
        <>
        <div>Model</div>
        {
        Model ?<div className="model">
        <span>Are you sure , playgame</span>
        <button onClick={()=>setModel(false)}>OK</button>
        </div> :""
      }
      <button onClick={()=>setModel(true)}>confirm</button>
      <div>
        <button className="WelcomeButton">Welcome</button>
        <img src="src/assets/ph.png.jpeg"/>
        <h1>secure game password</h1>
        <p>Ensure password ,security of game with premium characters</p>
        <button className='premium'>Purchase Permium</button>
      </div>
        </>
    )
}
export default Model;