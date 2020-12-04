import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    function verifyInputs(){
        if (email === '' || password === '' )
            alert("Preencha todos os campos");
        else{
            const request = axios.post("http://localhost:3000/api/users/sign-in", {email, password});
            request.then(() => {
                history.push('/principal')
            }).catch(() => {
                alert("Email/Senha incorretos");
            });
        }
    } 

    return(
        <>
            <Forms onSubmit={e => e.preventDefault()}>
                <input  type="email" name="email" placeholder="E-mail" 
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                <input  type="password" name="senha" placeholder='Senha' 
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                <button type="submit" onClick={verifyInputs}>Entrar</button>
            </Forms>
        </>
    );
}

const Forms = styled.form`
    margin: 20px 0;
    input{
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0;
    }
    button{
        background: #A328D6;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        color: #FFF;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }
`;