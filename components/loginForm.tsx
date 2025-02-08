
import { login, logout } from '@/hook/actions/actions';
import { error } from 'console';
import React, { useActionState } from 'react';

const LoginForm = () => {
    const [state, formAction] = useActionState<any, FormData>(login, undefined);
    return (
        <form action={formAction}>
            <input type='text' name="username" required placeholder='username'></input>
            <input type='password' name="password" required placeholder='password'></input>
            <button>Login</button>
            {
                state?.error&&<p>{state?.error}</p>
            }
        </form>
    );
};

export default LoginForm;