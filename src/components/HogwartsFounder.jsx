import React from 'react';
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
    </div>
  );
}

export default HogwartsFounder;
