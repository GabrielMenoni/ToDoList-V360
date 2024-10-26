import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound() {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <NotFoundContainer>
            <p>Página não encontrada!</p>
            <button onClick={() => navigate('/')}>Voltar</button> {/* Navega para '/' */}
        </NotFoundContainer>
    );
}
