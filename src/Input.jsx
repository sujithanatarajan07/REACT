import {useState,useEffect}from'react'
function Input() {
  const [data, setData] = useState({
    name: "",
    password: ""
  })
  const[input,setInput]=useState(true)
  const [error,setError]=useState(false)
  useEffect(() => {
    fetch('https://dummyjson.com')
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json(); 
      })
      .then((json) => {
        setData({
          name: json.username || "",
          password: json.password || ""
        });
        setLoading(false); // Data successfully loaded
      })
      .catch((err) => {
        console.error('Error fetching:', err);
        setError(true);
        setLoading(false);
      });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", data);
  };
  if(input) {
    return ("no");
}

  if (error) {
    return ("not")}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={data.name} 
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Input;
