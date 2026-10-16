import {React,useState} from'react'
function Header() {
    const[status, setstatus] = useState("");
    const ctime=new Date().toLocaleTimeString();
    console.log(ctime)
     if(ctime<= "15:45:02" && status!="grey") {
       console.log("System is offline");
       setstatus("grey");
     }
     
    return (
        <>
        <div style={({width: "100%", height:"100%vh",backgroundColor: status})} >
            HEADER REACT
            {status}
            <button disabled ={status=="grey" ? true:false}>test</button> 
            </div>        
       
        </>
    )
}
export default Header;