import EmployeeSkills from "./EmployeeSkills";
function EmployeeCard() {
    const employee = {
    name: "Priya",
    role: "Frontend Developer",
    salary: 30000
  }
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>

    </div>
  );
}

export default EmployeeCard;