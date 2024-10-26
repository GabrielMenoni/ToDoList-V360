import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper, LoginContainer } from './styles';

export function Login(isDarkMode: boolean) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Chame useNavigate aqui, no corpo do componente

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // Evita o reload da página

        if (username.trim()) {
            localStorage.setItem('username', username); // Armazena o nome no localStorage
            navigate('/'); // Navega para a página inicial
        } else {
            alert('Por favor, insira seu nome.');
        }
    };

    return (
        <LoginContainer>
            <LoginWrapper>
                <h1>Entre com a sua conta</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Nome</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Digite seu nome"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do nome
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                        />
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
