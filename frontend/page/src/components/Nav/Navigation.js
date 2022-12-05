import classes from '../Nav/Navbar.modules.scss'
import NavLinks from "./NavLinks";
import NavLinksMobile from './NavLinksMobile';

const Navigation = () => {
    return ( 
        <nav className="Navigation">
            <NavLinks/>
        </nav>
     );
}
 
export default Navigation;