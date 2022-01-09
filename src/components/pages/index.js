import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjFour} from '../InfoSection/Data';
import Navbar from '../Navbar'; 
import Services from '../Services';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
                <Services />
  
                <InfoSection {...homeObjFour}/>
                <Footer />
        </>
    );
};

export default Home
