import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesChecks,
    ServicesIcon,
    ServicesH2,
    ServicesP, 
    CheckMark,
    DollarSign
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
                    <ServicesChecks>
                    <ServicesP>< CheckMark/>22 pre-built workouts</ServicesP>
                    <ServicesP>< CheckMark/>24/7 Gym access</ServicesP>
                    <ServicesP>< CheckMark/>Access to 4 classes / week</ServicesP>
                    <ServicesP>< CheckMark/>Limited access</ServicesP>
                    </ServicesChecks>
                    <ServicesH2><DollarSign />79.99</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Platinum</ServicesH2>
                    <ServicesChecks>
                    <ServicesP>< CheckMark/>30 pre-built workouts</ServicesP>
                    <ServicesP>< CheckMark/>24/7 Gym access</ServicesP>
                    <ServicesP>< CheckMark/>Unlimited access to classes</ServicesP>
                    <ServicesP>< CheckMark/>Limited access to all of our studios</ServicesP>
                    </ServicesChecks>
                    <ServicesH2><DollarSign />119.99</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Diamond</ServicesH2>
                    <ServicesChecks>
                    <ServicesP>< CheckMark/>50 pre-built workouts</ServicesP>
                    <ServicesP>< CheckMark/>24/7 Gym access</ServicesP>
                    <ServicesP>< CheckMark/>Unlimited access to classes</ServicesP>
                    <ServicesP>< CheckMark/>Unlimited access to all of our studios</ServicesP>
                    <ServicesP>< CheckMark/>Monthly meal plan designed by our scientists</ServicesP>
                    </ServicesChecks>
                    <ServicesH2><DollarSign />199.99</ServicesH2>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
