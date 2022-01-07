import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
