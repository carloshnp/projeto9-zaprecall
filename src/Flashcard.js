import styled from "styled-components";
import setaVirar from './assets/img/seta_virar.png'
import setaPlay from './assets/img/seta_play.png'

export default function Flashcard(props) {
  const { id, pergunta, resposta } = props.flashcard;
  return (
    <Container>
      <p>Pergunta {id}</p>
      <p>{pergunta}</p>
      <p>{resposta}</p>
      <img src={setaPlay} alt='Play' />
      <img src={setaVirar} alt='Virar' />
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
