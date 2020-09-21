import React from 'react';
import './style.css';
import Imagelink from './../../assets/images/fundomesa1920p.png';


function Login() {
    return(
        <div>
            <img id='back' alt='Imagem de fundo' src={Imagelink}/>
            <div id='login-box'>
                <h1>Login</h1>
                <input className='login-input' type='text' placeholder='Usuário'/>
                <br/>
                <input className='login-input' type='password' placeholder='Senha'/>
                <br/>
                <span>Precisa de ajuda (?)</span>
                <br/>
                <button>Entrar</button>
            </div>
        </div>
    );
}

export default Login;