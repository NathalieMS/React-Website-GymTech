import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../images/contact_background.jpg'


export const Container = styled.div`
min-height: 840px;
/* position: fixed; */
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
/* overflow: hidden; */
background-image: url(${background});
background-size: 100% 150%;

@media screen and (max-width: 768px) {
    background-size: cover;
    }

`;

export const ContactWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-widht: 400px){
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color:#ff4800;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const ContactContainer = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 48px;
    /* padding: 0 50px; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ContactCard = styled.div` 
/* background: #0E1527; */

/* background: linear-gradient(325deg, rgba(255,72,0,0.5357493339132529) 0%, rgba(255,121,0,0.54) 35%, rgba(255,170,0,0.54) 100%); */

margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    height: 380px;
    padding: 40px;
    transition: all 0.2s ease-in-out;
    


    &:hover {

        transform: scale(1.1);
        transition: all 0.2s ease-in-out;

    }

    &:hover h2{

        color:#ff4800;
    }
`;

export const ContactPhoto = styled.img` 
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin-bottom: 10px;

`;
export const ContactH1 = styled.h1` 
display:flex;
flex-direction: column;
align-items: center;
margin-top: 120px;
    font-size: 2.8rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {

        text-align: center;
    }
`

export const ContactH2 = styled.h2` 
    font-size: 1.6rem;
    text-align: center;
    color: #f7f8fa;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const SocialContactContainer = styled.div` 

    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: space-evenly;

`;


export const SocialMediaLink = styled.a` 
    color: #f7f8fa;
    font-size: 32px;

    &:hover{
        color: #ff4800;
    }
`;



