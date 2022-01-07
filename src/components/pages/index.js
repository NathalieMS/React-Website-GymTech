import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

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
                <InfoSection />
        </>
    );
};

export default Home
