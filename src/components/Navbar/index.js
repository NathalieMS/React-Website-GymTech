import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinksContact
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>GymTech</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    About</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='locations'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>Locations</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='memberships'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>Memberships</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='howitworks'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>How it Works</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinksContact to='/contact'>Contact</NavLinksContact>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/login'>Log In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
