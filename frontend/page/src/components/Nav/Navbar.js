import classes from '../Nav/Navbar.modules.scss'
import MobileNavgation from './MobileNavigation'
import Navgation from './Navigation'
import { Link } from "react-router-dom";
import usuario from './user.svg'


const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>

                <li>
                    <MobileNavgation/>
                </li>
                <li>
                <Link to="/">
                    <h2>Web Motors</h2>
                </Link>
                </li>
                <li>
                    <img src={usuario}></img>
                    <Link to="/login">
                        <h3>Login</h3>
                    </Link>
                    
                </li>

            </ul>
            
        </div>
    );
}
 
export default Navbar;