import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

export const DayListWrapper = styled.div`

    padding: 1rem 2rem;
    

    .date {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        color: white;
        font-weight: 400;
    }

    .taskList {
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
        padding-bottom: 1rem;

        .task {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            border-left: 2px solid ${({ theme }) => theme.colors.primary};
            padding-left: 1rem;

            &:last-child{
                border-right: none;
            }

            h3{
                font-size: 1.3rem;
                font-weight: 500;
            }

            p {
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.9);
                font-weight: 300;
            }
        }
    }

.container {
  cursor: pointer;
}

.container input {
  display: none;
}

.container svg {
  overflow: visible;
}

.path {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.container input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}
`

export const TrashIcon = styled(FaTrash)`
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-size: 1.5rem;
`