import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignIn(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    
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
                <button type="submit" >Cadastrar</button>
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