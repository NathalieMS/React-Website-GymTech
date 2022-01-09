import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
}
    from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='memberships'>
            <ServicesH1>Flexible plans to fit your lifestyle</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Gold</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    <br />
                    <ServicesH2>$79.99</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Platinum</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                    <br />
                    <ServicesH2>$119.99</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Diamond</ServicesH2>
                    <ServicesP>Unlock our special embership card that returns 5% cash back.</ServicesP>
                    <br />
                    <ServicesH2>$199.99</ServicesH2>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
