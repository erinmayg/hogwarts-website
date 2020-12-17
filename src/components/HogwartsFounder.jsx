import React, { useEffect } from 'react';
import '../App.css';
import FounderCard from './FounderCard';

function HogwartsFounder(props) {
  return (
    <div className='fullscreen founder'>
      <div className={'founderSection z-10 ' + props.house + 'FounderSection'}>
        <FounderCard
          card={props.card}
          founder={props.founder}
          founderName={props.founderName}
          house={props.house}
        />
        <div className={'founderData ' + props.house + 'FounderContent'}>
          <h1>{props.bio}</h1>
        </div>
      </div>
      <div class={'decor ' + props.house + 'Decor'}>
        <div class={'block dark' + props.color}></div>
        {props.houseAnimal}
      </div>
    </div>
  );
}

export default HogwartsFounder;
