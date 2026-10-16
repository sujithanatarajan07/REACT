import StudentCard from "./StudentCard.jsx"

function App() {
  return (
    <div>
      <StudentCard/>
    </div>
  );
}

export default App;


/*import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
    </Stack>
  );
}


import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
     <Dashboard products={products} />
  
  );
}

export default App;

import UserList from "./UserList";
function App() {
  return (
    <div>
      <h1>User Dictonary</h1>
      <UserList />
    </div>
  );
}

export default App;

import EmployeePage from "./EmployeePage";
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function App() {
return (
  <>
   <EmployeePage/>
   <Badge badgeContent={3} color="secondary">
      </Badge>
<Box
       sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:2,
          width: 100,
          height: 100,
        },
      }}
    >
      <Paper elevation={10} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  </>
)
}

export default App;

/*import Parent from "./Parent";

function App() {
  const student = {
    name: "Arun",
    department: "MERN Stack"
  };

  return (
    <>
    <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
  <Parent student={student}/>
 
  </>
  )
}

export default App;

import Dashboard from'./Frontend/Dashboard.jsx'
 
 function App() {
   return (
     <Dashboard/>
   )
 }
 
 export default App*/