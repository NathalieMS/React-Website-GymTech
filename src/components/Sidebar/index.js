import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Sobre Nós</SidebarLink>
                    <SidebarLink to='unidades' onClick={toggle}>Unidades</SidebarLink>
                    <SidebarLink to='planos' onClick={toggle}> Planos</SidebarLink>
                    <SidebarLink to='atividades' onClick={toggle}> Atividades</SidebarLink>
                    <SidebarLink to='contato' onClick={toggle}> Contato</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar