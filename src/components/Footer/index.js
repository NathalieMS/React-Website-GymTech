import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle,
FooterLink } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/'>How it works</FooterLink>
                               <FooterLink to='/'>Testmonials</FooterLink>
                               <FooterLink to='/'>Carrers</FooterLink>
                               <FooterLink to='/'>Investors</FooterLink>
                               <FooterLink to='/'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/'>How it works</FooterLink>
                               <FooterLink to='/'>Testmonials</FooterLink>
                               <FooterLink to='/'>Carrers</FooterLink>
                               <FooterLink to='/'>Investors</FooterLink>
                               <FooterLink to='/'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>
                    </FooterLinksWrapper>  

                    <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/'>How it works</FooterLink>
                               <FooterLink to='/'>Testmonials</FooterLink>
                               <FooterLink to='/'>Carrers</FooterLink>
                               <FooterLink to='/'>Investors</FooterLink>
                               <FooterLink to='/'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/'>How it works</FooterLink>
                               <FooterLink to='/'>Testmonials</FooterLink>
                               <FooterLink to='/'>Carrers</FooterLink>
                               <FooterLink to='/'>Investors</FooterLink>
                               <FooterLink to='/'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                    </FooterLinksWrapper>                     
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'>
                    dolla
                    </SocialLogo>
                    <WebsiteRights> GymTech  © {new Date().getFullYear()} 
                    All rigths reserved</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/resilia.br/" target="_blank"
                        aria-label="Facebook">
                        <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="//https://www.instagram.com/resilia.br/" target="_blank"
                        aria-label="Instagram">
                        <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="//www.youtube.com/channel/UCBIRxu3dixMNMRVjz-YQAcA" target="_blank"
                        aria-label="Youtube">
                        <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href="//twitter.com/resilia_br" target="_blank"
                        aria-label="Twitter">
                        <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="//www.linkedin.com/company/resilia-educa%C3%A7%C3%A3o/" target="_blank"
                        aria-label="Linkedin">
                        <FaLinkedin />
                        </SocialIconLink>
                        
                    </SocialIcons>

                    </SocialMediaWrap>
                    </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
