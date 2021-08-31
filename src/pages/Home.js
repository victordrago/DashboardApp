import React from 'react';
import {NavbarNav} from '../components/NavbarNav';
import {Sidebar} from '../components/Sidebar';

export const Home = () => {
    return (
            <div className="flex">
            <Sidebar />
                <div className="content w-100">
                    <NavbarNav />                    
                    </div>
                </div>
    );
}

