
import user from '../Nav/user.svg'

const NavLinksMobile = () => {


    return ( 
        <ul className="mob">
            <li>
                <img src={user}></img>
                <a href="#header"> Home</a>
            </li>
            <li>
                <img src={user}></img>
                <a href="#portfolio"> Projetos</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#cards"> Sobre</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#posts"> Certificados</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#ferramentas">Stacks</a>
            </li>
            <li>
                 <img src={user}></img>
                <a href="#contato">Contato</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;