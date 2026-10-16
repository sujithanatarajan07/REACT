import axios from "axios"
import { Paper,TextField } from "@mui/material";
import {useState,useEffect} from "react";
function StudentCard(props) {
    const[data,setdata]=useState([])
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
        },[])
  return (
    <div style={{backgroundColor:"skyblue"}}>
        {data.map((i)=>{
            return(
                <>
                <p>{i.Name}</p>
                <p>{i.Email}</p>
                </>
            )
        })}
        <h1 style={{textAlign:"center"}}>Student details application</h1>
        <div style={{marginLeft:"100px"}}>
        <Paper elevation={10} style={{width:"25%",textAlign:"center",padding:"7%",height:"10%",backgroundColor:"white"}}>
        <div style={{display:"flex", gap:"10px" ,flexDirection:"column",width:"35%",marginleft:"10px"}}>
      <h1> name: {props.name}</h1><br/>
      <TextField variant="filled"  label="name" helpertext ="name is required" required/><br/>
      <h1> username: {props.username}</h1><br/>
      <TextField variant="filled"  label="username" helpertext ="username is required" required/><br/>
      <h1> email:{props.email}</h1><br/>
      <TextField variant="filled"  label="email" helpertext ="email is required" required/><br/>
      <h1> adress:{props.adress}</h1><br/>
      <TextField variant="filled"  label="adress" helpertext ="adress is required" required/><br/>
      <button  style={{fontSize:"20px",border:"2px solid",backgroundColor:"skyblue" }}>Button</button>
      </div>
      </Paper>
      </div>
    </div>
    
  );
}
export default StudentCard ;