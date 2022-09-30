import Flashcard from './Flashcard'
import styled from 'styled-components'

export default function Main(props) {

    const { deck } = props

    const deckMap = deck.map((flashcard) => <Flashcard flashcard={flashcard}/>)
    console.log(deckMap)
    return (
        <Container>
            {deckMap}
        </Container>
    )
}

const Container = styled.div`
    max-height: 400px;
    overflow-y: auto;

    ::-webkit-scrollbar {
    display: none;
    }
`
