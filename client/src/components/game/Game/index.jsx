import React, { useContext, Fragment } from 'react'
import Board from '../Board'
import Sidebar from '../Sidebar'
import ModalHands from '../ModalHands'
import ModalKing from '../ModalKing'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Game = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      {/* Modals */}
      {game.modalHands[userId] && <ModalHands />}
      {game.modalKing.isActive && game.king.id === userId && <ModalKing />}

      {game.phase.phaseGame < 2 && <Board />}

      {game.phase.phaseGame === 2 && (
        <h3 className={style.title}>The Winner is ! {game.lastWinner}</h3>
      )}

      <Sidebar />
    </div>
  )
}

export default Game
