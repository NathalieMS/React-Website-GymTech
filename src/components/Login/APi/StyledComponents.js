import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
min-height: 792px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
background: linear-gradient(225deg, #ffc93f 0, #ffba41 12.5%, #ffaa43 25%, #ff9a45 37.5%, #f98946 50%, #eb7946 62.5%, #de6b47 75%, #d15e48 87.5%, #c65449 100%);;
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-widht: 400px){
    height: 80%;
}
`;

export const Icon = styled.text`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color:#fff;
font-weight: 700;
font-size: 32px;
@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 480px){
    padding: 10px
}
`

export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 15px auto;
padding: 60px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

export const FormInput = styled.input`
width: 90%;
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #FF7900;
padding: 10px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
margin-bottom: 10px;
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
cursor: pointer;
`;

export const EditButton = styled.p`
display: flex;
font-size: 42px;
width: 30px;
height: auto;
color: #FF7900;
cursor: pointer;
margin-left: 2px;

&:hover{
    color: #fff;
}
`
export const FormButtonSearch = styled.button`
background: #FF7900;
padding: 32px 0;
width: 300px; 
border: none;
border-radius: 4px;
color: #fff;
font-size: 1.5rem;
cursor: pointer;
margin-bottom: 10px;
margin-top: 20px;
`

export const LinkEdit = styled(Link)`
text-decoration: none;
text-align:center;
background: #FF7900;
padding: 32px 0;
width: 300px; 
border: none;
border-radius: 4px;
color: #fff;
font-size: 1.5rem;
cursor: pointer;
margin-bottom: 10px;
margin-top: 20px;`

export const FormEditInput = styled.div`  
    display:flex;
    width: 100%;
` 
/* att */