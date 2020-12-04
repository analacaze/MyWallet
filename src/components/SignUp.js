import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function SignIn(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const history = useHistory();

    function verifyInputs(){
        if (name === '' || email === '' || password === '' || passwordConfirmation === '' )
            alert("Preencha todos os campos");
        else{
            const request = axios.post("http://localhost:3000/api/users/sign-up", {name, email, password, passwordConfirmation});
            request.then(() => {
                history.push('/principal');
            }).catch(() => {
                alert("Email já cadastrado");
            });
        }
    }
    
    return(
        <>
            <Forms onSubmit={e => e.preventDefault()}>
                <input  type="text" name="name" placeholder="Nome" 
                        onChange={e => setName(e.target.value)}
                        value={name} />
                <input  type="email" name="email" placeholder='E-mail' 
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                <input  type="password" name="senha" placeholder='Senha' 
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                <input  type="password" name="senha" placeholder='Confirme a senha' 
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation} />
                <button type="submit" onClick={verifyInputs} >Cadastrar</button>
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