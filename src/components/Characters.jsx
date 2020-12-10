import React, { useState, useEffect } from 'react';
import voldemort from '../images/voldemortbookmark.png';
import draco from '../images/dracobookmark.png';
import snape from '../images/snapebookmark.png';
import '../App.css';
import snake from '../images/snake.png';
import { ReactComponent as Snake } from '../svg/snake3.svg';

function Characters() {
  const [characterName, setCharacterName] = useState('Notable Characters');
  const [image, setImage] = useState(snake);
  let characterDesc = null;
  return (
    <div className='fullscreen'>
      <div className='notableCharactersSection z-10'>
        <div className='notableCharactersTitle'>
          <img src={image} />
          <div className='notableCharactersInfo'>
            <h1>{characterName}</h1>
            <h2>{characterDesc}</h2>
          </div>
        </div>
        <div className='notableCharactersSection'>
          <div
            className='bookmark'
            onClick={() => {
              setImage(voldemort);
              setCharacterName('Lord Voldemort');
            }}
          >
            <img src={voldemort} className='bookmarkImage' />
            <h1 className='characterName'>
              Lord <br /> Voldemort
            </h1>
          </div>
          <div
            className='bookmark'
            onClick={() => {
              setImage(draco);
              setCharacterName('Draco Malfoy');
            }}
          >
            <img src={draco} className='bookmarkImage-alt' />
            <h1 className='characterName-alt'>
              Draco <br /> Malfoy
            </h1>
          </div>
          <div
            className='bookmark'
            onClick={() => {
              setImage(snape);
              setCharacterName('Severus Snape');
            }}
          >
            <img src={snape} className='bookmarkImage' />
            <h1 className='characterName'>
              Severus <br /> Snape
            </h1>
          </div>
        </div>
      </div>
      <div className='decor'>
        <div className='lineblock'></div>
        <Snake />
      </div>
    </div>
  );
}

export default Characters;
