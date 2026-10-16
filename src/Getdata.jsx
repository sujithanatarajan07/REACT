import {useState,useEffect} from "react"
import axios from "axios"
const Getdata=()=> {
    const[data,setData]=useState([])
    console.log(data)
    useEffect(() => {
        axios.get("https://dummyjson.com/c/5cd8-9ff3-4f05-91ec")
        .then((res) =>setData(res.data)
        .catch((err)=>console.log(err))
        
    )
    } ,[])
return (
    <div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Id</th>
            </tr>
        </thead>
        
        {data.map((i)=> {
            return (
                <>
                <tbody>
                    {data.map((i)=> {
                        return(
                    <tr key={i.id}>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.id}</td>
                    </tr>
                        )
        })}
                </tbody>
                </>
            )
        }
        )}
        </table>
        </div>
)}
export default Getdata;