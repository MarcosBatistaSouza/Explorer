import { Container,Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/MarcosBatistaSouza.png" alt="Foto do Usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Marcos Vinicius</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}