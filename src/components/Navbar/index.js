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
                        <NavLinks to='about'>Sobre Nós</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='unidades'>Unidades</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='planos'>Planos</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='atividades'>Atividades</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/contato'>Contato</NavLinks>
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
