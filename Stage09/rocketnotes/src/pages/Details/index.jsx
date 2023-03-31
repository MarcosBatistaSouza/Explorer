import {Container,Links, Content} from "./styles.js"
import { Header } from "../../components/Header/index.jsx"
import { Button } from "../../components/Button"
import { Section} from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details(){

  return(
    <Container>
      <Header/>

        <main>
          <Content>
            <ButtonText title="Excluir nota"/>
            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis enim repudiandae dolorum minus ipsa est odio fugiat voluptas a assumenda saepe, illo ratione tempora consequuntur eligendi inventore quam ex placeat.
            </p>
            <Section title="Links úteis">
              <Links>
                <li>
                  <a href="#">Link 1</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="Node" />
            </Section>
            <Button title = "Voltar"/>

          </Content>
      </main>
    </Container>
  )

}