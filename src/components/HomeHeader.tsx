import { Link } from "react-router-dom";
import "./home-header.css"

export default function HomeHeader()
{
    return (
        <Link to ="/">
            <button className="home-header">
                (- _ -) . o O
            </button>
        </Link> 
    );
}