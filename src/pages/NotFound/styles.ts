import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 3rem;
    font-weight: bold;
    color: #333;

    button {
        margin-top: 20px;
        padding: 0.5rem 4rem;
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        background-color: rgb(255, 92, 1, 0.8);
        border: none;
        border-radius: 16px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: rgb(255, 92, 1, 1);
        }
    }
`