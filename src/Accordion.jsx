import{useState} from "react"
import './Accordion.css'
const Accordion=()=> {
    const[open,setOpen]=useState(null) ;
    const acc = [
        {id:1,title:"accordion 1",para:"paragraph 1"},
        {id:2,title:"accordion 2",para:"paragraph 2"}
    ]
    function handleId() {
        console.log(id)
        //setOpen(id)
setOpen(open === id ? null : id)
    }
  return (
    <> 
    {
        acc.map((res)=> {
            return (
                <>
                <p className="head" onClick={()=>handleId(res.id)}>{res.title}</p>
                {res.id}
                {open?<p>{res.para }</p>: ""}
                </>
            )
        } )
    }
    </>
  )
}

export default Accordion
//</><p className='head'>Accordion 2</p>
  //      <p>Attack on Titan a popular dark fantasy media franchise, but it can also mean Ahead-of-Time compilation in computer programming.</p>
  //{/*<p className='head' onClick={()=>{setOpen(!open)}}>Accordion 1</p>
    //   {open ? <p>Paragraph</p>:""} */}
      //function expand() {
    //    setOpen(!open)
    //}