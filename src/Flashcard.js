import styled from "styled-components"

export default function Flashcard(props) {
    const { pergunta, resposta } = props.flashcard
    return (
        <Container>
            {pergunta},
            {resposta}
        </Container>
    )
}

const Container = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
`
