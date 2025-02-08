
import { login, logout } from '@/hook/actions/actions';
import React from 'react';
import { useFormState } from 'react-dom';

const LoginForm = () => {
    const [state, formAction] = useFormState<any, FormData>(login, undefined);
    return (
        <form action={formAction}>
            <input type='text' name="username" required placeholder='username'></input>
            <input type='password' name="password" required placeholder='password'></input>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;