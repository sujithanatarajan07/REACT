import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/Login_tk">Login_tk</Link>
                </li>
                <li>
                    <Link to="/Home_tk">Home_tk</Link>
                </li>
                 <li>
                    <Link to="/Contact_tk">Contact_tk</Link>
                </li>
                 <li>
                    <Link to="/About_tk">About_tk</Link>
                </li>
                 <li>
                    <Link to="/Skill_tk">Skill_tk</Link>
                </li>
                 <li>
                    <Link to="/Project_tk">Project_tk</Link>
                </li>
            </ul>
            </nav>
        </div>
  )
}

export default Navbar
// <li>
            //<Link to="/Accordion_tk">Accordion_tk</Link>
               // </li>