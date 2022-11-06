import LessFooter from '@/Components/Footer/LessFooter';
import NavbarTamu from '@/Components/Navbar/NavbarTamu';
import React from 'react';

const Tamu = ({children}) => {
    return (
        <>
            <NavbarTamu />
            {children}
            <LessFooter />
        </>
    );
}

export default Tamu;
