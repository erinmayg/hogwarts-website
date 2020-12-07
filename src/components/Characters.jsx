import React from 'react';
import voldemort from '../images/voldemortbookmark.png';
import draco from '../images/dracobookmark.png';
import snape from '../images/snapebookmark.png';
import '../App.css';
import { ReactComponent as Snake } from '../svg/snake3.svg';

function Characters() {
  return (
    <div className='fullscreen'>
      <div className='notableCharactersSection z-10'>
        <div className='bookmark'>
          <img src={voldemort} className='bookmarkImage' />
          <h1 className='characterName'>
            Lord <br /> Voldemort
          </h1>
        </div>
        <div className='bookmark'>
          <img src={draco} className='bookmarkImage-alt' />
          <h1 className='characterName-alt'>
            Draco <br /> Malfoy
          </h1>
        </div>
        <div className='bookmark'>
          <img src={snape} className='bookmarkImage' />
          <h1 className='characterName'>
            Severus <br /> Snape
          </h1>
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
