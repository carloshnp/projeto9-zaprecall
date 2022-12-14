import styled from "styled-components";
import setaVirar from './assets/img/seta_virar.png'
import setaPlay from './assets/img/seta_play.png'
import zap from './assets/img/icone_certo.png'
import quase from './assets/img/icone_quase.png'
import errou from './assets/img/icone_erro.png'

export default function Flashcard(props) {
  const { mostrarPergunta, mostrarResposta, corrigirFlashcard} = props
  const { id, pergunta, resposta, mostrar } = props.flashcard
  console.log(mostrar)

  if (mostrar === '') {
    return (
      <ContainerFechada mostrar={mostrar}>
        <p>Pergunta {id}</p>
        <img src={setaPlay} onClick={() => mostrarPergunta(id)} alt='Play' />
      </ContainerFechada>
    )
  }
  else if (mostrar === 'pergunta') {
    return (
      <ContainerAberta mostrar={mostrar}>
        <p>{pergunta}</p>
        <img src={setaVirar} onClick={() => mostrarResposta(id)} alt='Virar'/>
      </ContainerAberta>
    )
  }
  else if (mostrar === 'resposta') {
    return (
      <ContainerAberta mostrar={mostrar}>
        <p>{resposta}</p>
        <ContainerBotoes>
            <Botao erroZap onClick={e => corrigirFlashcard(e)}>Não lembrei</Botao>
            <Botao quaseZap onClick={e => corrigirFlashcard(e)}>Quase não lembrei</Botao>
            <Botao onClick={e => corrigirFlashcard(e)}>Zap!</Botao>
        </ContainerBotoes>
      </ContainerAberta>
    )
  }
  else if (mostrar === 'Errou') {
    return (
      <ContainerFechada mostrar={mostrar}>
        <p>Pergunta {id}</p>
        <img src={errou} alt='Errou' />
      </ContainerFechada>
    )
  }
  else if (mostrar === 'Quase') {
    return (
      <ContainerFechada mostrar={mostrar}>
        <p>Pergunta {id}</p>
        <img src={quase} alt='Quase' />
      </ContainerFechada>
    )
  }
  else if (mostrar === 'Zap') {
    return (
      <ContainerFechada mostrar={mostrar}>
        <p>Pergunta {id}</p>
        <img src={zap} alt='Zap' />
      </ContainerFechada>
    )
  }
}

const ContainerFechada = styled.div`
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
    text-decoration: ${props => props.mostrar === 'Errou' ? 'line-through' : props.mostrar === 'Quase' ? 'line-through' : props.mostrar === 'Zap' ? 'line-through' : 'none' };
    color: ${props => props.mostrar === 'Errou' ? '#FF3030' : props.mostrar === 'Quase' ? '#FF922E' : props.mostrar === 'Zap' ? '#2FBE34' : '#333333' };
  }
`

const ContainerAberta = styled.div`

  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  background: ${props => props.erroZap ? '#FF3030' : props.quaseZap ? '#FF922E' : '#2FBE34'};
  border-radius: 5px;
  border: 0;
  padding: 5px;
  cursor: pointer;
`;
