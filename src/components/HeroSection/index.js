import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowRight, 
    ArrowForward } from './HeroElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>O futuro para construir sua melhor versão</HeroH1>
                <HeroP>
                    Conectando seu corpo com a tecnologia e ciência para resultados em tempo recorde.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='/contato' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                            Eu quero {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
