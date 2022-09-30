import DECK from './DECK'
import styled from 'styled-components'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export default function App() {

    return (
        <>
        <Container>
            <Header />
            <Main deck={DECK} />
            <Footer />
        </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header {
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 36px;
  color: white;
  font-family: "Righteous";
  z-index: 1;
  background-color: var(--cor-fundo);
  }

  .header img {
  width: 52px;
  height: 60px;
  }
`
