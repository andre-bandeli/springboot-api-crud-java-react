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
                    
                    <h2>Logo</h2>
                </li>
                <li>
    
                    <img src={usuario}></img>
                    <Link to="/login">
                        <h2>Login</h2>
                    </Link>
                    
                </li>

            </ul>
            
        </div>
    );
}
 
export default Navbar;