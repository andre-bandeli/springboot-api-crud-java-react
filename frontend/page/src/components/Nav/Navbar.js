import classes from '../Nav/Navbar.modules.scss'

import MobileNavgation from './MobileNavigation'
import Navgation from './Navigation'


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
                    <h2>Login</h2>
                </li>

            </ul>
            
        </div>
    );
}
 
export default Navbar;