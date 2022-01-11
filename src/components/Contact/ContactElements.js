import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #f7f8fa;
/* background: linear-gradient(135deg, hsla(180, 71%, 1%, 1) 5%, hsla(28, 100%, 50%, 1) 74%, hsla(34, 100%, 50%, 1) 91%); */
/* background: #010606; */
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
margin-top: -150px;
text-decoration: none;
color:#ff7900;
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
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ContactCard = styled.div` 
background: rgb(255,72,0);
background: linear-gradient(325deg, rgba(255,72,0,0.5357493339132529) 0%, rgba(255,121,0,0.54) 35%, rgba(255,170,0,0.54) 100%);

margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    height: 380px;
    padding: 30px;
    box-shadow: 0 1px 3px -2px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    /* filter: grayscale(100%); */

    &:hover {
        /* filter: none; */
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;        
    }
`;

export const ContactPhoto = styled.img` 
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const ContactH2 = styled.h2` 
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const SocialContactContainer = styled.div` 

    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start ;
`;


export const SocialMediaLink = styled.a` 
    color: #fff;
    font-size: 32px;

    &:hover{
        color: #010606;
    }
`;



