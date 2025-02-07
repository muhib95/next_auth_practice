import Link from 'next/link';
import React from 'react';
import LogOutForm from './logoutForm';

const NavBar = () => {
    return (
        <nav>
            <Link href="/">Homepage</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            <LogOutForm></LogOutForm>
        </nav>
    );
};

export default NavBar;