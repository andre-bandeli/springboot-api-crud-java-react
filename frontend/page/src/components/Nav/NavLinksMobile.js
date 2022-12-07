
import user from '../Nav/user.svg'
import { Link } from "react-router-dom";

const NavLinksMobile = () => {


    return ( 
        <ul className="mob">
            <li>
                <img src={user}></img>
                <Link to="/">Home</Link>
            </li>
            <li>
                <img src={user}></img>
                <a href="#portfolio"> Motocicletas</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#cards"> Automoveis</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#posts"> Financiamentos</a>
            </li>
            <li>
                 <img src={user}></img>
                 <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#contato">Contato</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;