import { Container,Form,Avatar } from "./styles";
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/MarcosBatistaSouza.png" 
                    alt="Foto do perfil" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input 
                type = "text"
                placeholder = "Nome"
                icon={FiUser}
                />
                <Input 
                type = "mail"
                placeholder = "E-mail"
                icon={FiMail}
                />
                <Input 
                type = "text"
                placeholder = "Senha atual"
                icon={FiLock}
                />
                <Input 
                type = "text"
                placeholder = "Senha nova"
                icon={FiLock}
                />

                <Button title = "Salvar"/>
            </Form>
        </Container>
    );
}