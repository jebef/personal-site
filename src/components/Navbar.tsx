import { Link } from "react-router-dom";
import "./navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar-links">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/life-log">life log</Link></li>
            <li><Link to="/pix">pix</Link></li>
        </ul>
    </nav>
  );
}

