import styled from "styled-components";
import zap from './assets/img/icone_certo.png'
import quase from './assets/img/icone_quase.png'
import errou from './assets/img/icone_erro.png'

export default function Footer(props) {
  const { deck, contador, contadorIcone } = props
  const tamanhoDeck = deck.length
  const iconeMap = contadorIcone.map((icone) => renderizarIcone(icone))

  function renderizarIcone(icone) {
    if (icone === 'errou') {
      return (
        <img src={errou} alt={'errou'} />
      )
    }
    else if (icone === 'quase') {
      return (
        <img src={quase} alt={'quase'} />
      )
    }
    if (icone === 'zap') {
      return (
        <img src={zap} alt={'zap'} />
      )
    }
  }

  return (
    <>
      <ContainerFooter>
        <p>{contador}/{tamanhoDeck} concluídos</p>
        <ContainerIcone>
          {iconeMap}
        </ContainerIcone>
      </ContainerFooter>
    </>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  min-height: 100px;
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

const ContainerIcone = styled.div`
  display: flex;
  margin-top: 8px;

  img {
    padding: 0px 2px;
  }
`