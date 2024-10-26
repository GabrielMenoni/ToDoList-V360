import React from 'react';
import { LoginWrapper, LoginContainer } from './styles';

export function Login() {
    return (
        <LoginContainer>
            <LoginWrapper>
                <h1>Entre com a sua conta</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Nome</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu nome" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" />
                    </div>
                    <button type="submit">Entrar</button>
                    <div className="links">
                        <a href="#">Esqueci minha senha</a>
                        <a href="#">Não tem uma conta? Cadastre-se</a>
                    </div>
                </form>
            </LoginWrapper>
        </LoginContainer>
    );
}
