//import'./Home.css'
function Home_tk() {
const data = [
{
Name: "Sujitha",
course: "MERN",
department: "IT"
}
]
return (
<div>
  {data.map((item) => (
    <div>
      <p>Name: {item.Name}</p>
      <p>Course: {item.course}</p>
      <p>Department: {item.department}</p>
      </div>
    ))}
    </div>
    );
  
  }
export default Home_tk