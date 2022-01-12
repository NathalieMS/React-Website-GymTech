import styled from 'styled-components';
import { BsCheckLg, BsCurrencyDollar } from 'react-icons/bs';

export const MembershipsContainer = styled.div`  
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`;

export const MembershipsWrapper = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const MembershipsCard = styled.div` 
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;        
    }
`;
export const MembershipsChecks = styled.div` 
    min-height: 240px;
    padding: 10px 0;
`;

export const MembershipsIcon = styled.img` 
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const MembershipsH1 = styled.h1` 
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {

        text-align: center;
    }


    @media screen and (max-width: 480px) {

        font-size: 2rem;
    }
    `;

export const MembershipsH2 = styled.h2` 
    font-size: 1.2rem;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const MembershipsP = styled.p` 
    font-size: 1rem;
    text-align: center;
    padding-top: 5px;
`;

export const CheckMark = styled(BsCheckLg)` 
    margin-right: 8px;
    font-size: 16px;
    color: #FF7900;
    `;

export const DollarSign = styled(BsCurrencyDollar)` 
    margin-right: 8px;
    font-size: 1.2rem;
    color: #FF7900;
    `; 
