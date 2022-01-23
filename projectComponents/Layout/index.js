import React from 'react';
import Navbar from "../Navbar";
import styles from './index.module.css'

const Layout = (props) => {
    return (
        <main>
            <Navbar/>
            {props.children}

        </main>
    );
};

export default Layout;
