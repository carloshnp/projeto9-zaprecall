import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <ContainerFooter>
        <ContainerBotoes>
            <button>Não lembrei</button>
            <button>Quase não lembrei</button>
            <button>Zap!</button>
        </ContainerBotoes>
        <p>0/4 concluídos</p>
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

  button {
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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
  }
`;
