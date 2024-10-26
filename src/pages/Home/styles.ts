import styled from "styled-components";
import { FaSmileBeam } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5vh 3vw;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .func {
            display: flex;
            align-items: center;
            gap: 2.5rem;

            p {
                display: flex;
                align-items: center;
                flex-direction: column;
                transition: 0.3s;

                &:hover {
                    color: ${({ theme }) => theme.colors.primary} !important;
                    cursor: pointer;
                    transition: 0.3s;
                }
            }
        }
    }

    .subtitle {
        font-size: 1.5rem;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
        margin-top: 1vh;
    }

    .dailyTasks {
        margin-top: 10vh;
        display: flex;
        background-color: rgba(89, 42, 158, 1);
        width: 85%;
        align-self: center;
        border-radius: 16px;
        box-shadow: 0 0 15px 5px rgba(89, 42, 158, 0.8);
    }

    .otherTasks {
        margin-top: 5vh;
        display: flex;
        background-color: rgba(89, 42, 158, 1);
        width: 65%;
        align-self: center;
        border-radius: 16px;
    }
`

export const AddButtonWrapper = styled.div`
    display: flex;
    align-self: flex-end;


    .button {
        position: relative;
        width: 150px;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px solid #34974d;
        background-color: #3aa856;
    }

    .button, .button__icon, .button__text {
        transition: all 0.3s;
    }

    .button .button__text {
        transform: translateX(30px);
        color: #fff;
        font-weight: 600;
    }

    .button .button__icon {
        position: absolute;
        transform: translateX(109px);
        height: 100%;
        width: 39px;
        background-color: #34974d;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button .svg {
        width: 30px;
        stroke: #fff;
    }

    .button:hover {
        background: #34974d;
    }

    .button:hover .button__text {
        color: transparent;
    }

    .button:hover .button__icon {
        width: 148px;
        transform: translateX(0);
    }

    .button:active .button__icon {
        background-color: #2e8644;
    }

    .button:active {
        border: 1px solid #2e8644;
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalWrapper = styled.div`
    background: white;
    padding: 2rem;
    width: fit-content;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 15px 5px rgba(89, 42, 158, 0.6);
    

    .modalInfos {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }

    .modalInputs {
        display: flex;
        flex-direction: column;
    }

    .modalTitle {
        align-self: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.secondary};
    }

    .inputImportant {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        
        input {
            width: 1.5rem;
            height: 1.5rem;
            border: 2px solid ${({ theme }) => theme.colors.secondary};
            border-radius: 4px;
            appearance: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:checked {
                background-color: ${({ theme }) => theme.colors.secondary}; /* Cor quando marcado */
                border-color: ${({ theme }) => theme.colors.primary}; /* Muda a cor da borda ao marcar */
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            
        }
    }

    label {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.secondary};
    }

    button {
        align-self: center;
        width: 15rem;
        height: 3rem;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            transition: 0.3s;
        }
    }

    input[type="text"], textarea {
        padding: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 8px;
        min-width: 20rem;
        width: 100%;
        margin-bottom: 2rem;

        &:focus {
            outline: none;
            border: 2px solid ${({ theme }) => theme.colors.secondary};
        }
    }

    .inputDescription {
        height: 5rem;
    }
`;


export const SmileIcon = styled(FaSmileBeam)`
    font-size: 1.5rem;
`

export const LogoutIcon = styled(AiOutlineLogout)`
    font-size: 1.5rem;
`

export const DarkModeIcon = styled(MdDarkMode)`
    font-size: 1.5rem;
`

export const LightModeIcon = styled(MdLightMode)`
    font-size: 1.5rem;
`