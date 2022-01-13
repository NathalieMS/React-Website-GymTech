import React, {useState} from 'react';
import Contact from '../Contact';
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';


const ContactPage = () => {

    const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ScrollToTop />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage;