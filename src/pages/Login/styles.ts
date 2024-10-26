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
    width: 35vw;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(89, 42, 158, 0.8);
    border-radius: 8px;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: white;
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
        font-size: 1.4rem;
        color: white;
    }

    .input-group input {
        width: 95%;
        height: 3rem;
        font-size: 1rem;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: white;
        color: black;
        margin-left: 5px;
        margin-bottom: 0.5rem;
    }

    button {
        width: 50%;
        padding: 10px;
        border: none;
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

    button:hover {
        background-color: #45a049;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        padding: 1rem;
    }

    .links a {
        display: block;
        color: lightgray;
        text-decoration: none;
        margin: 5px 0;
    }

    .links a:hover {
        text-decoration: underline;
    }
`;
