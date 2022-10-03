import styled from "styled-components";

export default function Footer(props) {
  const { deck, setDeck, contador, setContador } = props
  const tamanhoDeck = deck.length

  function corrigirFlashcard(e) {
    const comandoBotao = e.target.textContent
    console.log(comandoBotao)
    const novoDeck = deck.map(flashcard => {
      let novoFlashcard = {...flashcard}

      if (flashcard.mostrar === 'resposta') {
        console.log(flashcard)
        if (comandoBotao === 'Não lembrei') {
          novoFlashcard = {...flashcard, mostrar: 'Errou'}
        }
        else if (comandoBotao === 'Quase não lembrei') {
          novoFlashcard = {...flashcard, mostrar: 'Quase'}
        }
        else if (comandoBotao === 'Zap!') {
          novoFlashcard = {...flashcard, mostrar: 'Zap'}
        }
        setContador(contador + 1)
      }
      console.log(novoFlashcard)
      return novoFlashcard
    })
    console.log(novoDeck)
    setDeck(novoDeck)
  }

  return (
    <>
      <ContainerFooter>
        <ContainerBotoes>
            <Botao errou onClick={e => corrigirFlashcard(e)}>Não lembrei</Botao>
            <Botao quase onClick={e => corrigirFlashcard(e)}>Quase não lembrei</Botao>
            <Botao onClick={e => corrigirFlashcard(e)}>Zap!</Botao>
        </ContainerBotoes>
        <p>{contador}/{tamanhoDeck} concluídos</p>
      </ContainerFooter>
    </>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Righteous";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`
const Botao = styled.button`
  width: 90px;
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${props => props.errou ? '#FF3030' : props.quase ? '#FF922E' : '#2FBE34'};
  border-radius: 5px;
  border: 0;
  padding: 5px;
  cursor: pointer;
`;
