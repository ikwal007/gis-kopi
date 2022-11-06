import LessFooter from '@/Components/Footer/LessFooter';
import NavbarLoged from '@/Components/Navbar/NavbarLoged';
import React from 'react';

const Loged = ({children}) => {
    return (
        <>
            <NavbarLoged />
            <section className='min-h-screen'>{children}</section>
            <LessFooter />
        </>
    );
}

export default Loged;
