import styled from "styled-components";
import setaVirar from './assets/img/seta_virar.png'
import setaPlay from './assets/img/seta_play.png'

export default function Flashcard(props) {
  const {mostrarPergunta, mostrarResposta} = props
  const { id, pergunta, resposta, mostrar } = props.flashcard

  if (mostrar === '') {
    return (
      <Container>
        <p>Pergunta {id}</p>
        <img src={setaPlay} onClick={() => mostrarPergunta(id)} alt='Play' />
      </Container>
    )
  }
  else if (mostrar === 'pergunta') {
    return (
      <Container>
        <p>{pergunta}</p>
        <img src={setaVirar} onClick={() => mostrarResposta(id)} alt='Virar'/>
      </Container>
    )
  }
  else if (mostrar === 'resposta') {
    return (
      <Container>
        <p>{resposta}</p>
      </Container>
    )
  }
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
