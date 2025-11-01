import "../styling/Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar({ action, name }) {
    
    return (
        <div className="navigation">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/search">search</Link></li>
                <li><Link to="/browse">view all jokes</Link></li>
                <li><Link to="/random">see a random joke</Link></li>
                <li><Link to="/new">add a joke</Link></li>
            </ul>
        </div>
    )
}