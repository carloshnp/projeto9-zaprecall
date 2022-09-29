import DECK from './Deck'
import styled from 'styled-components'
import Flashcard from './Flashcard'

export default function App() {
    return (
        <>
        <Deck>
            <div className="header">
                <span>ZapRecall</span>
            </div>
            <div className="main">
                <Flashcard />
            </div>
            <div className="footer">
            </div>
        </Deck>
        </>
    )
}

const Deck = styled.div`
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

  .main {
  max-height: 400px;
  overflow-y: auto;
  }

  .main::-webkit-scrollbar {
  display: none;
  }

  .header img {
  width: 52px;
  height: 60px;
  }
`