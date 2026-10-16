import { useState}from'react'
function Test() {
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
  const [crtdata,setCrtdata]= useState("")
  const [error,setError]= useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    const Username = "gmailTest"
    const Password = "admin123"
    if (username===Username || password===Password) {
      setCrtdata("Login Successfully!");
      setError("");
    } else {
      setError("Incorrect Username or Password😑");
      setCrtdata("");
    }
  }
  return (
    <div className="main">
      <div className="login-card">
        <p className="welcome">Welcome</p>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username / E-mail" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} required 
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Test;
