import React from 'react'
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
                               <FooterLink to='login'>How it works</FooterLink>
                               <FooterLink to='login'>Testmonials</FooterLink>
                               <FooterLink to='login'>Carrers</FooterLink>
                               <FooterLink to='login'>Investors</FooterLink>
                               <FooterLink to='login'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='login'>How it works</FooterLink>
                               <FooterLink to='login'>Testmonials</FooterLink>
                               <FooterLink to='login'>Carrers</FooterLink>
                               <FooterLink to='login'>Investors</FooterLink>
                               <FooterLink to='login'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>
                    </FooterLinksWrapper>  

                    <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='login'>How it works</FooterLink>
                               <FooterLink to='login'>Testmonials</FooterLink>
                               <FooterLink to='login'>Carrers</FooterLink>
                               <FooterLink to='login'>Investors</FooterLink>
                               <FooterLink to='login'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='login'>How it works</FooterLink>
                               <FooterLink to='login'>Testmonials</FooterLink>
                               <FooterLink to='login'>Carrers</FooterLink>
                               <FooterLink to='login'>Investors</FooterLink>
                               <FooterLink to='login'>Terms of Service</FooterLink>                           
                       </FooterLinksItems>

                    </FooterLinksWrapper>                     
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
