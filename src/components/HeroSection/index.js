import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward
} from './HeroElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        // conferir se é isso
        <HeroContainer id='contact'> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The future to build your best version</HeroH1>
                <HeroP>
                    Connecting your body with technology and science for results in record time
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/contact' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        // se continuar como contato pode apagar o que está embaixo
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Join Now {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
