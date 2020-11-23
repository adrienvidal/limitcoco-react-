import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import { GET_PLAYERS } from '../types'

const GameState = (props) => {
  const initialState = {
    users: [
      {
        id: 1,
        name: 'John',
        score: 0,
        statut: 'wait',
        isYou: true,
        isKing: false,
        cards: [
          {
            id: 1,
            desc: 'Le slip de Jean-Pierre',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 2,
            desc: 'Le slip de Jean-Pierre2',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 3,
            desc: 'Le slip de Jean-Pierre3',
            type: 'answer',
            isSelected: true,
            isPlayed: false,
          },
          {
            id: 4,
            desc: 'Le slip de Jean-Pierre4',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 5,
            desc: 'Le slip de Jean-Pierre5',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Jess',
        score: 0,
        statut: 'wait',
        isYou: false,
        isKing: false,
        cards: [
          {
            id: 1,
            desc: 'Le slip de Jean-Pierre',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 2,
            desc: 'Le slip de Jean-Pierre2',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 3,
            desc: 'Le slip de Jean-Pierre3',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 4,
            desc: 'Le slip de Jean-Pierre4',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 5,
            desc: 'Le slip de Jean-Pierre5',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
        ],
      },
      {
        id: 3,
        name: 'Fred',
        score: 0,
        statut: 'wait',
        isYou: false,
        isKing: true,
        cards: [
          {
            id: 1,
            desc: 'Le slip de Jean-Pierre',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 2,
            desc: 'Le slip de Jean-Pierre2',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 3,
            desc: 'Le slip de Jean-Pierre3',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 4,
            desc: 'Le slip de Jean-Pierre4',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
          {
            id: 5,
            desc: 'Le slip de Jean-Pierre5',
            type: 'answer',
            isSelected: false,
            isPlayed: false,
          },
        ],
      },
    ],
    currentQuestion: {
      id: 1,
      desc: '____ a mangé un burger aux fraises',
      answers: 1,
      type: 'question',
    },
    questionsDeck: [],
    answersDeck: [],
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  // Get players

  return (
    <GameContext.Provider
      value={{
        users: state.users,
        currentQuestion: state.currentQuestion,
        questionsDeck: state.questionsDeck,
        answersDeck: state.answersDeck,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
