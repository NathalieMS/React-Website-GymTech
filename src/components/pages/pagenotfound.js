import React, { useState } from 'react';

import Navbar from '../Navbar'; 
import PageNotFound from '../PageNotFound';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const PageNotFoundPage = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <PageNotFound />
                <Footer />
        </>
    );
};

export default PageNotFoundPage