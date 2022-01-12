import React from 'react'
import FotoLarissa from '../../images/larissa.jpg'
import FotoNathalie from '../../images/nathalie.jpg'
import FotoMurilo from '../../images/murilo.jpg'
import FotoYasmin from '../../images/yasmin.jpg'


import {
    FaLinkedin,
    FaGithub
}
    from 'react-icons/fa';
import {
    Container,
    ContactWrap,
    Icon,
    ContactContainer,
    ContactCard,
    ContactPhoto,
    ContactH2,
    SocialContactContainer,
    SocialMediaLink
   
} from '././ContactElements'


const Contact = () => {
    return (
        <>
            <Container>
                <ContactWrap>
                    <Icon to='/'>GymTech</Icon>

                    <ContactContainer>
                        
                    <ContactCard>
                    <ContactPhoto src={FotoLarissa} />
                    <ContactH2>Larissa Silva</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/larissa-silva-773228100/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/LariCostaSilva/" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                <ContactCard>
                    <ContactPhoto src={FotoMurilo} />
                    <ContactH2>Murilo Mininel</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/murilo-rodrigues-259011212/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/muridev017" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                <ContactCard>
                    <ContactPhoto src={FotoNathalie} />
                    <ContactH2>Nathalie Moreira</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/nathalie-moreira/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/NathalieMS" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                <ContactCard>
                    <ContactPhoto src={FotoYasmin} />
                    <ContactH2>Yasmin Reis</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/yasminreisk/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/yasminreisk" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>



                    </ContactContainer>

                </ContactWrap>
            </Container>
        </>
    )
}

export default Contact;
