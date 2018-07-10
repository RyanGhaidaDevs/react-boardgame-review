import React from 'react'

const Game = (props) => {
  
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.game.genre.name}</td>
    </tr>
  )
}

export default Game;
