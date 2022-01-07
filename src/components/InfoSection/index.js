import React from 'react'

const InfoSection = () => {
    return (
        <>
         <InfoContainer id={id}>
             <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>ToplLine</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to='home'>Button</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                </InfoRow>
             </InfoWrapper>
             </InfoContainer>   
        </>
    )
}

export default InfoSection
