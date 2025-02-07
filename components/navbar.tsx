import Link from 'next/link';
import React from 'react';
import LogOutForm from './logoutForm';
import { getSession } from '@/hook/actions/actions';

const NavBar = async() => {
    const session=await getSession();
    return (
        <nav>
            <Link href="/">Homepage</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            {
                session.isLogin &&
              <LogOutForm></LogOutForm>  
            }
            
        </nav>
    );
};

export default NavBar;