import DECK from "./DECK"
import styled from "styled-components"
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import { useState } from "react"

export default function App() {

  const [deck, setDeck] = useState(DECK)
  const [contador, setContador] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main deck={deck} setDeck={setDeck} />
        <Footer deck={deck} contador={contador} setDeck={setDeck} setContador={setContador}/>
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
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  overflow-y: auto;
`;
