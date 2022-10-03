import DECK from "./DECK"
import styled from "styled-components"
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import { useState } from "react"
import logo from './assets/img/logo.png'

export default function App() {

  const [deck, setDeck] = useState(DECK)
  const [contador, setContador] = useState(0)
  const [telaInicial, setTelaInicial] = useState(true)

  function mudarTela() {
    setTelaInicial(false)
  }

  return (
    <>
      <GlobalStyle />
      <TelaInicial telaInicial={telaInicial}>
        <img src={logo} alt='logo' />
        <h1>ZapRecall</h1>
        <button setTelaInicial={setTelaInicial} onClick={mudarTela}>Iniciar recall!</button>
      </TelaInicial>
      <Container telaInicial={telaInicial}>
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
  display: ${props => props.telaInicial ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  overflow-y: auto;
  position: relative;
`;

const TelaInicial = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  height: 100vh;
  display: ${props => props.telaInicial ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  position: relative;

  img {
    width: 136px;
  }

  h1 {
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-top: 20px;
  }

  button {
    font-family: 'Recursive', normal;
    width: 246px;
    height: 54px;
    margin-top: 40px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
    cursor: pointer;
  }
`
