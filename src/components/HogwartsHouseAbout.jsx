import React from 'react';
import '../App.css';

function HogwartsHouseAbout(props) {
  return (
    <div className='fullscreen'>
      <div className='houseSection'>
        <div>
          <div className='houseContent'></div>
          {props.houseCrest}
          <h1 className='houseName houseContent'>{props.house}</h1>
          <h2 className='houseTraits houseContent'>{props.traits}</h2>
          <div></div>
          <div className={'quote ' + props.color}>
            <h1 className={'quotationMark houseContent ' + props.color}>“</h1>
            <h2 className={'houseContent ' + props.color}>
              {props.sortingHat}
            </h2>
            <h1 className={'quotationMark houseContent ' + props.color}>”</h1>
            <h3 className={'sortingHat houseContent ' + props.color}>
              Sorting Hat
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogwartsHouseAbout;
