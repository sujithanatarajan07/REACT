/*import {React,useState} from "react"
//import './Project.css'
const Project=()=> {
    const [value,setValue]=useState({
        Name:"Ajay",Age:19,email:"abc@123",Department:"IT" })
        const[form,setForm]=useState({
        Name:"Ajay",Age:19,email:"abc@123",Department:"IT" })
    /*const [input,setInput]=useState("your data will visible here☺️")
    const [email,setEmail]=useState(" ")
    const[age,setAge]=useState(0)
    function inc() {
        setValue(!value)
    }
    function getData(e) {
        setInput(e.target.value)
    }
   
        if(value ==0) {
            setValue(1)
        }
        else {
            setValue(0)
        }
    }
  console.log(value)
function mail(event) {
    setEmail(event.target.value)
 }
  function handle(event) {
    event.preventDefault();
    alert(input)
  }
  function agee(event) {
    setAge(event.target.value);
  }*/
  //const data={
        /*/Name:"Ajay",Age:19,Department:"IT" }
        function change(event) {
          setValue(
            {
              ...value,
             [event.target.Name]: event.target.value

            }
          )}
          function submit(event) {
           event.preventDefault();
           setForm ({
            ...form,
            Name:data.name,
            Age:data.age
           }
          )
          }
        
    return (
       <>
      <form onSubmit={submit}>
      <input onChange={(event)=>console.log(event)}name={"name"} placeholder="Enter your Name"/><br/>
      <input/><br/>
       <input onChange={change} name={"Age"}placeholder="Enter your Age"/><br/>
       <button type="submit">submit</button>
       </form>
       </>
    )
  }
  */
    
export default Project;
//<p onClick={inc} >
//<button onClick={inc}>INCREMENT</button>
//<button onClick={inc} >dark/light</button>
//<span onClick={inc}>{value?"🌞" : "🌙"}</span>//<p onClick={inc} >
//<button onClick={inc}>INCREMENT</button>
//<button onClick={inc} >dark/light</button>
//<span onClick={inc}>{value?"🌞" : "🌙"}</span>
//<input onChange={inc}/> => color changing
//function getData(event) {
   //     console.log("event")
  //  }/ function getdata(event) {
   //  setInput(event.target.value)
  //}
  // <div style={{background:value ? "Skyblue" : "Black",height:"100vh"}}>
       // {value}
       // <span style={{cursor: "not-allowed"}}onClick={inc}>{value?"🌞" : "🌙"}</span>
import {React,useState} from'./react'
const Accordian=()=>{
  const [open,setOpen]=useState(null);[
   {id:1,title:"acc1",para:"graph1"},
   {id:2,title:"acc2",para:"graph2"},
  ]
  
}
