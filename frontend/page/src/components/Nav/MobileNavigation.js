import classes from '../Nav/Navbar.modules.scss'
import NavLinks from "./NavLinks";

import {CgClose, CgMenu} from 'react-icons/cg'
import { useState } from 'react';
import NavLinksMobile from './NavLinksMobile';

const MobileNavigation = () => {

    const hamburguerIcon = <CgMenu className='Hamburguer'size='40px' color='rgb(51, 49, 49)' onClick={() => setOpen(!open)}/>

    const closeIcon = <CgClose className='Hamburguer'size='30px' color='rgb(51, 49, 49)' onClick={() => setOpen(!open)}/>

    const [open, setOpen] = useState(false);
    return (  
        <nav className="MobileNavigation">
         {open ? closeIcon : hamburguerIcon}

         {/* <CgMenuRound className='Hamburguer' size='50px' color='white' onClick={() => setOpen(!open)}/> */}

        {open && <NavLinksMobile/>}
        </nav>
     );
}
 
export default MobileNavigation;