import Flashcard from './Flashcard'
import styled from 'styled-components'

export default function Main(props) {

    const { deck, setDeck } = props

    function mostrarPergunta(idPergunta) {
        const novoDeck = deck.map(flashcard => {
            let novoFlashcard = {...flashcard}
            if (flashcard.mostrar === 'pergunta' || flashcard.mostrar === 'resposta') {
                novoFlashcard = {...flashcard, mostrar: ''}
            }
            else if (flashcard.mostrar === '') {
                if (flashcard.id === idPergunta) {
                    novoFlashcard = {...flashcard, mostrar: 'pergunta'}
                }
            }
            return novoFlashcard
        })
        setDeck(novoDeck)
    }

    function mostrarResposta(idResposta) {
        const novoDeck = deck.map(flashcard => {
            let novoFlashcard = {...flashcard}

            if (flashcard.id === idResposta) {
                novoFlashcard = {...flashcard, mostrar: 'resposta'}
            }
            return novoFlashcard
        })
        setDeck(novoDeck)
    }

    function renderizarFlashcard(flashcard) {
        if (flashcard.mostrar === '') {
            return (
                <Flashcard flashcard={flashcard} mostrarPergunta={mostrarPergunta}/>
                )
        }
        else if (flashcard.mostrar=== 'pergunta') {
            return (
                <Flashcard flashcard={flashcard} mostrarResposta={mostrarResposta} />
            )
        }
        else if (flashcard.mostrar === 'resposta') {
            return (
            <Flashcard flashcard={flashcard} />
            )
        }
        else if(flashcard.mostrar === 'Errou') {
            return (
                <Flashcard flashcard={flashcard} />
            )
        }
        else if(flashcard.mostrar === 'Quase') {
            return (
                <Flashcard flashcard={flashcard} />
            )
        }
        else if(flashcard.mostrar === 'Zap') {
            return (
                <Flashcard flashcard={flashcard} />
            )
        }
    }

    const deckMap = deck.map((flashcard) => renderizarFlashcard(flashcard))
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
