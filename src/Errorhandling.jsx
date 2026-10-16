import {useState} from"react"
import './Errorhandling.css'
function Errorhandling(data) {
    console.log(data)
 const[value,setValue]=useState(
    {
        name:"",
        email:"",
        age:""
    }, )
    const[error,setError] = useState ({
        nameError:"",
        emailError:"",
        ageError:""
    })
    function change(event){
        setValue({
            ...value,
            [event.target.name]:event.target.value
        }
    )
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(value.name==""){
            setError({
                ...error,
                nameError:"field is empty"
            })
        }
        else if(value.name.length<3){
            setError({
                ...error,
                nameError:"less than 3 letters"
            })
        }
           
}
    return(
         <div>
            <div>className='container'</div>
        <div>
            <h1 className="rigthfrom">LEARN & DISCOVER</h1>

      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={change}/><br/> 
        <span style={{color:'red'}}>{error.nameError}</span><br/>
        <input type="email" placeholder="Email" onChange={change}/><br/><br/> 
        <input type="number" placeholder="age" onChange={change}/><br/><br/> 
        <button type="submit">Submit</button>
        </form>
        </div>
         </div>
          </div>
    )
}
export default Errorhandling