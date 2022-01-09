import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">GymTech</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />    
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='locations'>Locations</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='memberships'>Memberships</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='howitworks'>How it Works</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Log In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
