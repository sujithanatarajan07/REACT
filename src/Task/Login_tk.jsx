import'./Login_tk.css'
function Login_tk() {
const data = [
{
username: "suji",
password:"***"
}
];

return (
<div>
  {data.map((item) => (
    <div>
      <p>username: {item.username}</p>
      <p>password: {item.password}</p>
      <button type="submit">submit</button>
      </div>
    ))}
    </div>
    );
  }

export default Login_tk;