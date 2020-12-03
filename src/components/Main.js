import React, { useState } from 'react';
import styled from 'styled-components';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Main(){
    const [signIn, setSignIn] = useState(true);
    
    return (
        <Container>
            <h1>MyWallet</h1>            
            {signIn ? <SignIn /> : <SignUp />}            
            {signIn ? 
                <a onClick={() => setSignIn(false)}>Primeira vez? Cadastre-se</a> :
                <a onClick={() => setSignIn(true)}>Já tem uma conta? Entre agora!</a>}                   
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height:100vh;
    background:#8C11BE;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
        h1{
            font-family: 'Saira Stencil One', cursive;
            font-size: 32px;
        }
        a{
            color: #FFF;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
        }
`;

