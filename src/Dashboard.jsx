import{useState} from'react'
import ProductList from "./ProductList";
function Dashboard() {
  const[product,setProduct]=useState("");
  const[loading,setLoading]=useState("");
  return (
    <div>
     <h1>Product Dashboard</h1>
      {loading ? <p>Loading products...</p> : <ProductList />}
    </div>
  );
}

export default Dashboard;