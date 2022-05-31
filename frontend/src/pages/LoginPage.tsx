import React, { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../AuthMiddleware';

const LoginPage: React.FC = () => {
    const [mail, setMail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const {logIn} = useContext(AuthContext);

    const onClickLogin = useCallback(() => {
        if (mail === undefined) {
            alert("É necessário informar um email antes de logar");
            return;
        }
        if (password === undefined) {
            alert("É necessário informar uma senha antes de logar");
            return;
        }
        logIn(mail, password);
    }, [mail, password, logIn]);

    const onChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>((ev) => {
        console.log({v: ev.target.value});
        setMail(ev.target.value)
    }, []);
    const onChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>((ev) => {
        console.log({v: ev.target.value});
        setPassword(ev.target.value);
    }, []);

    return(
        <div>
            Logo
            <input placeholder='Email' type='text' onChange={onChangeEmail} />
            <input placeholder='Password' type='password' onChange={onChangePassword} />
            <button onClick={onClickLogin}>Logar</button>
        </div>
    )
};

export default LoginPage;
