import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound(isDarkMode: boolean) {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <NotFoundContainer>
            <p style={{ color: isDarkMode ? 'white' : 'black' }}>Página não encontrada!</p>
            <button onClick={() => navigate('/')}>Voltar</button> {/* Navega para '/' */}
        </NotFoundContainer>
    );
}
