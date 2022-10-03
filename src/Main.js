import Flashcard from './Flashcard'
import styled from 'styled-components'

export default function Main(props) {

    const { deck, setDeck, contador, setContador, contadorIcone, setContadorIcone } = props

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

    function corrigirFlashcard(e) {
        const comandoBotao = e.target.textContent
        const novoDeck = deck.map(flashcard => {
            let novoContadorIcone = []
            let novoFlashcard = {...flashcard}

            if (flashcard.mostrar === 'resposta') {
                if (comandoBotao === 'Não lembrei') {
                    novoFlashcard = {...flashcard, mostrar: 'Errou'}
                    novoContadorIcone = [...contadorIcone, 'errou']
                }
                else if (comandoBotao === 'Quase não lembrei') {
                    novoFlashcard = {...flashcard, mostrar: 'Quase'}
                    novoContadorIcone = [...contadorIcone, 'quase']
                }
                else if (comandoBotao === 'Zap!') {
                    novoFlashcard = {...flashcard, mostrar: 'Zap'}
                    novoContadorIcone = [...contadorIcone, 'zap']
                }
                setContadorIcone(novoContadorIcone)
                setContador(contador + 1)
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
            <Flashcard flashcard={flashcard} contador={contador} setContador={setContador} corrigirFlashcard={corrigirFlashcard} />
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
