import React, { useEffect } from 'react';
import '../App.css';
import FounderCard from './FounderCard';

function HogwartsFounder(props) {
  return (
    <div className='fullscreen founder'>
      <div className='founderSection z-10'>
        <FounderCard
          card={props.card}
          founder={props.founder}
          founderName={props.founderName}
        />
        <div className='founderData founderContent'>
          <h1>{props.bio}</h1>
          <button className={'readMore bg' + props.color}>
            <h1>READ MORE</h1>
          </button>
        </div>
      </div>
      <div class='decor'>
        <div class={'block dark' + props.color}></div>
        {props.houseAnimal}
      </div>
    </div>
  );
}

export default HogwartsFounder;
