import { logout } from '@/hook/actions/actions';
import React from 'react';

const LogOutForm = () => {
    return (
        <form action={logout}>
            <button>logout</button>
        </form>
    );
};

export default LogOutForm;