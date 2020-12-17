import React from 'react';
import '../App.css';

function HogwartsHouseAbout(props) {
  return (
    <div className='fullscreen'>
      <div className={'houseSection ' + props.house + 'Section'}>
        <div>
          <div className={props.house + 'Content'}></div>
          {props.houseCrest}
          <h1 className={'houseName ' + props.house + 'Content'}>
            {props.house}
          </h1>
          <h2 className={'houseTraits ' + props.house + 'Content'}>
            {props.traits}
          </h2>
          <div></div>
          <div className={'quote ' + props.color}>
            <h1
              className={
                'quotationMark ' + props.color + ' ' + props.house + 'Content'
              }
            >
              “
            </h1>
            <h2
              className={
                'houseContent ' + props.color + ' ' + props.house + 'Content'
              }
            >
              {props.sortingHat}
            </h2>
            <h1
              className={
                'quotationMark ' + props.color + ' ' + props.house + 'Content'
              }
            >
              ”
            </h1>
            <h3
              className={
                'sortingHat ' + props.color + ' ' + props.house + 'Content'
              }
            >
              Sorting Hat
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogwartsHouseAbout;
