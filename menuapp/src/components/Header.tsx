import { Link } from "react-router-dom";

export function Header(){
    return (
        <div className="Header">
            <h1><Link to="/menu">Menu</Link></h1>
        </div>
    )
}