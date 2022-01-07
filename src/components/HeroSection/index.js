import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>O futuro para construir sua melhor versão</HeroH1>
                <HeroP>
                    Conectando seu corpo com tecnologia e ciência para resultados em tempo recorde.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup"
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
