import { v4 as uuidv4 } from 'uuid'
import { shuffle, deepClone } from './utils'
import { questionDeck, answerDeck } from './cards'

export function createNewGame(playerIds) {
  // Init King
  const kingId = playerIds[0]

  // Init Cards
  const answerCards = answerDeck.map((card) => ({
    id: uuidv4(),
    text: card.text,
  }))

  const questionCards = questionDeck.map((card) => ({
    id: uuidv4(),
    text: card.text,
  }))

  let questions = shuffle(questionCards)
  let answers = shuffle(answerCards)

  const playerHands = {}
  playerIds.forEach((playerId) => {
    if (playerId !== kingId) {
      playerHands[playerId] = [answers.pop(), answers.pop(), answers.pop()]
    }
  })

  // Init Scores
  const scores = {}
  playerIds.forEach((playerId) => {
    scores[playerId] = 0
  })

  return {
    kingId: kingId,
    players: playerIds,
    scores: scores,
    hands: playerHands,
    question: questions[0],
  }
}
