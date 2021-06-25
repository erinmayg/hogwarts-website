import React from 'react';

function HogwartsHouseAbout(props) {
  return (
    <div className='fullscreen'>
      <div className={'houseSection ' + props.house + 'Section'}>
        <div className={props.house + 'Content'}></div>
        <div>
          {props.houseCrest}
          <h1 className={'houseName ' + props.house + 'Content'}>
            {props.house}
          </h1>
          <h2 className={'houseTraits ' + props.house + 'Content'}>
            {props.traits}
          </h2>
          <div></div>
          <div className={'quote'}>
            <h2 className={props.house + 'Content'}>{props.sortingHat}</h2>
            <h3 className={props.house + 'Content'}>Sorting Hat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogwartsHouseAbout;
