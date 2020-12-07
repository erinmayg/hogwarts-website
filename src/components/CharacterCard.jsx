import React from 'react';
import '../App.css';

function CharacterCard(props) {
  return (
    <div
      className='characterCard characterContent'
      style={{
        backgroundImage: `url(${props.house})`,
      }}
    >
      <img src={props.pic} />
    </div>
  );
}

export default CharacterCard;
