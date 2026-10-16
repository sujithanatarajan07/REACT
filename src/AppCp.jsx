/*import Home from'./Home.jsx';

function App() {
  return (
    <Home/>
  )
}
export default App;
import Accordion from'./Accordion.jsx'
function App() {
 return (
    <Accordion/>
  )
}
export default App;
import Project from'./Project.jsx'
import './Project.css'
function App(){
    return(
       <Project/> 
    )
}
import React from "react";
import Home from "./Home";
function App() {
return (
   <Home />
 );
}
export default App;
import Student from './Student.jsx'/*

/*import login_tk from'./Task/login_tk.jsx'
import Home_tk from'./Task/Home_tk.jsx'
import Accordion_tk from'./Task/Accordion_tk.jsx'
import Project_tk from'./Task/Project_tk.jsx'
import About_tk from'./Task/About_tk.jsx'
import Skill_tk from'./Task/Skill_tk.jsx'
import Contact_tk from'./Task/Contact_tk.jsx'
import Navbar from'./Task/Navbar.jsx'
import {Routes,Route} from "react-router-dom"
function App() {
  return(
    <div>
      <Navbar>
        <Routes>
          <Route path="/"element={<Home_tk/>}/>
          <Route path="/login_tk"element={<login_tk/>}/>
          <Route path="/Accordion_tk"element={<Accordion_tk/>}/>
          <Route path="/Project_tk"element={<Project_tk/>}/>
          <Route path="/About_tk"element={<About_tk/>}/>
          <Route path="/Skill_tk"element={<Skill_tk/>}/>
          <Route path="/Contact_tk"element={<Contact_tk/>}/>

        </Routes>
      </Navbar>
      </div>
  )
}*/


//Student old Program
/*import { useState } from "react";
 function Student() {
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [filter, setFilter] = useState(false);

  const [students, setStudents] = useState([
    { id: 1, name: "Suji", age:20, course: "IT" }
  ]);

  const addStudent = () => {
    if (name && age && course) {
      setStudents([
        ...students,
        {
          id: Date.now(),
          name: name,
          age: Number(age),
          course: course
        }
      ]);

      setName("");
      setAge("");
      setCourse("");
    } else {
      alert("Please fill all fields");
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const style = {
    background: dark ? "black" : "skyblue",
    color: dark ? "skyblue" : "black",
    minHeight: "50vh",
    padding: "10px",
    fontFamily: "arial"
  };

  const btn = {
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "10px"
  };

  const input = {
    padding: "5px",
    margin: "5px",
    fontSize: "10px",
    width: "12%"
  };

  return (
    <div style={style}>
      <button style={btn} onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <br /><br />

      <button
        style={btn}
        onClick={() => alert("React is a JavaScript library")}
      >
        What is React?
      </button>

      <h1>Counter: {count}</h1>

      <button style={btn} onClick={() => setCount(count + 1)}>
        +
      </button>

      <button style={btn} onClick={() => setCount(count - 1)}>
        -
      </button>

      <button style={btn} onClick={() => setCount(0)}>
        Reset
      </button>

      <br /><br />

      <input
        style={input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={input}
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        style={input}
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button style={btn} onClick={addStudent}>
        Add Student
      </button>

      <br /><br />

      <label style={{ fontSize: "10px" }}>
        <input
          type="checkbox"
          checked={filter}
          onChange={(e) => setFilter(e.target.checked)}
        />
        Show Students 18 or Above Only
      </label>

      <ul>
        {students
          .filter((s) => !filter || s.age >= 18)
          .map((s) => (
            <li key={s.id} style={{ margin: "16px" }}>
              {s.name} ({s.age} yrs) - {s.course}

              <button
                style={btn}
                onClick={() => deleteStudent(s.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Student;*/