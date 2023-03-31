import {Container,Brand,Menu,Search,Content,NewNote} from './styles'
import {FiPlus,FiSearch} from 'react-icons/fi'
import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import {ButtonText} from '../../components/ButtonText'
import {Section} from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

        <Header/>

        <Menu>
            <li>
                <ButtonText title="Todos"/>
            </li>
            <li>
                <ButtonText title="Todos"/>
            </li>
            <li>
                <ButtonText title="Todos"/>
            </li>
        </Menu>

        <Search>
            <Input placeholder = "Pesquisar pelo titulo" icon={FiSearch}/>
        </Search>

        <Content>
            <Section title="Minha notas">
                <Note data={{
                title: 'React', 
                tags:[
                    {id:'1', name: 'react'},
                    {id:'2', name: 'node'},
                    {id:'3', name: 'JS'},
                    {id:'4', name: 'HTML'}
                ]
                }}
                />
            </Section>
        </Content>

        <NewNote to="/new">
                <FiPlus/>
                <p>Criar Nota</p>
        </NewNote>
        </Container>
    )
}