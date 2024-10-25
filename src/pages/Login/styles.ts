import styled from 'styled-components';

export const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 40vw;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    text-align: center;

    h1 {
        font-size: 2.5rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;
    }

    .input-group label {
        display: flex;
        margin-bottom: 5px;
    }

    .input-group input {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: white;
        color: black;
        margin-left: 5px;
    }

    button {
        width: 100%;
        padding: 10px;
        border: none;
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    .links {
        margin-top: 10px;
    }

    .links a {
        display: block;
        color: #007BFF;
        text-decoration: none;
        margin: 5px 0;
    }

    .links a:hover {
        text-decoration: underline;
    }
`;
