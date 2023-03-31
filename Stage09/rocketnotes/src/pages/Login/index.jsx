import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import {Input} from '../../components/Input'
import { FiMail,FiLock } from "react-icons/fi";
import {Button} from '../../components/Button';

export function Login(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus link úteis.</p>

                <h2>Faça seu login</h2>
                <Input 
                    placeholder= "E-mail"
                    type = "text"
                    icon={FiMail}
                />
                <Input 
                    placeholder= "Senha"
                    type = "password"
                    icon={FiLock}
                />

                <Button title= 'Entrar'/>

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background/>
        </Container>
    );
}