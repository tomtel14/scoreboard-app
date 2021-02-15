import React from 'react';
import Icon from './Icon';
import Counter from './Counter';

const Player = ({ name, score, id, index, changeScore, removePlayer, isHighScore }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
        <Icon isHighScore={isHighScore} />
        {name}
      </span>
      <Counter score={score} index={index} changeScore={changeScore} />
    </div>
  )
}

export default Player;
