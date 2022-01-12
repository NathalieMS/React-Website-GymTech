import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import {
    MembershipsContainer,
    MembershipsH1,
    MembershipsWrapper,
    MembershipsCard,
    MembershipsChecks,
    MembershipsIcon,
    MembershipsH2,
    MembershipsP, 
    CheckMark,
    DollarSign
}
    from './MembershipsElements';

const Memberships = () => {
    return (
        <MembershipsContainer id='memberships'>
            <MembershipsH1>Flexible plans to fit your lifestyle</MembershipsH1>
            <MembershipsWrapper>

                <MembershipsCard>
                    <MembershipsIcon src={Icon1} />
                    <MembershipsH2>Gold</MembershipsH2>
                    <MembershipsChecks>
                    <MembershipsP>< CheckMark/>22 pre-built workouts</MembershipsP>
                    <MembershipsP>< CheckMark/>24/7 Gym access</MembershipsP>
                    <MembershipsP>< CheckMark/>Access to 4 classes / week</MembershipsP>
                    <MembershipsP>< CheckMark/>Access to one studio only - chosen by you</MembershipsP>
                    </MembershipsChecks>
                    <MembershipsH2><DollarSign />79.99</MembershipsH2>
                </MembershipsCard>

                <MembershipsCard>
                    <MembershipsIcon src={Icon2} />
                    <MembershipsH2>Platinum</MembershipsH2>
                    <MembershipsChecks>
                    <MembershipsP>< CheckMark/>30 pre-built workouts</MembershipsP>
                    <MembershipsP>< CheckMark/>24/7 Gym access</MembershipsP>
                    <MembershipsP>< CheckMark/>Access to 10 classes / week</MembershipsP>
                    <MembershipsP>< CheckMark/>Unlimited access to all of our studios</MembershipsP>
                    </MembershipsChecks>
                    <MembershipsH2><DollarSign />119.99</MembershipsH2>
                </MembershipsCard>

                <MembershipsCard>
                    <MembershipsIcon src={Icon3} />
                    <MembershipsH2>Diamond</MembershipsH2>
                    <MembershipsChecks>
                    <MembershipsP>< CheckMark/>50 pre-built workouts</MembershipsP>
                    <MembershipsP>< CheckMark/>24/7 Gym access</MembershipsP>
                    <MembershipsP>< CheckMark/>Unlimited access to classes</MembershipsP>
                    <MembershipsP>< CheckMark/>Unlimited access to all of our studios</MembershipsP>
                    <MembershipsP>< CheckMark/>Monthly meal plan designed by our scientists</MembershipsP>
                    <MembershipsP>< CheckMark/>1 Personal training session / Week</MembershipsP>

                    </MembershipsChecks>
                    <MembershipsH2><DollarSign />199.99</MembershipsH2>
                </MembershipsCard>

            </MembershipsWrapper>
        </MembershipsContainer>
    )
}

export default Memberships
