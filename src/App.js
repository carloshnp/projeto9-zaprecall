import DECK from "./DECK";
import styled from "styled-components";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";

export default function App() {

  // const [card, setCard] = useState('id')

  // mostrarCard: deve mostrar a pergunta no flashcard ao clicar na setaPlay, substituindo o 'Pergunta {id}' pela {pergunta}, e escondendo o botão setaPlay e mostrando o botão setaVirar
  // function mostrarCard() {
  //    if (card=)
  // }

  // mostrarResposta: deve mostrar a resposta no flashcard ao clicar na setaVirar, substituindo a {pergunta} pela {resposta}, e escondendo o botão setaVirar

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main deck={DECK} />
        <Footer />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Righteous', cursive;
    }
`;

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
