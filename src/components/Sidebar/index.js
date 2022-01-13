import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkContact } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='locations' onClick={toggle}>Locations</SidebarLink>
                    <SidebarLink to='memberships' onClick={toggle}>Memberships</SidebarLink>
                    <SidebarLink to='howitworks' onClick={toggle}>How it Works</SidebarLink>
                    <SidebarLinkContact to='/contact' onClick={toggle}> Contact</SidebarLinkContact>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar