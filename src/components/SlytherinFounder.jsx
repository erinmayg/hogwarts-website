import React, { useEffect } from 'react';
import '../App.css';
import FounderCard from './FounderCard';
import card from '../images/card.png';
import founder from '../images/salazar.png';
import founderName from '../images/salazarName.png';
import { ReactComponent as Snake } from '../svg/snake.svg';

function SlytherinFounder() {
  return (
    <div className='fullscreen founder'>
      <div className='founderSection z-10'>
        <FounderCard card={card} founder={founder} founderName={founderName} />
        <div className='founderData founderContent'>
          <h1>
            <span className='dropcap green'>S</span>alazar Slytherin was a
            pure-blood wizard, noted for his <i>cunning</i> and
            <i> determination</i>. He was regarded as one of the greatest
            wizards of the age, respectively as a Parselmouth and as a skilled
            Legilimens.
          </h1>
          <button className='readMore'>
            <h1>READ MORE</h1>
          </button>
        </div>
      </div>
      <div class='decor'>
        <div class='block'></div>
        <Snake />
      </div>
    </div>
  );
}

export default SlytherinFounder;
