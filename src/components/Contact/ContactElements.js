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
background: linear-gradient(135deg, hsla(180, 71%, 1%, 1) 5%, hsla(28, 100%, 50%, 1) 74%, hsla(34, 100%, 50%, 1) 91%);
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
margin-top: -600px;
text-decoration: none;
color:#fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

