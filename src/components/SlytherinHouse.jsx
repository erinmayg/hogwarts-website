import React from 'react';
import '../App.css';
import { ReactComponent as SlytherinLogo } from '../svg/slytherin.svg';

function SlytherinHouse() {
  return (
    <div className='fullscreen'>
      <div className='houseSection'>
        <div>
          <div className='houseContent'></div>
          <SlytherinLogo />
          <h1 className='houseName houseContent'>Slytherin</h1>
          <h2 className='houseTraits houseContent'>
            Pride • Cunning • Ambition
          </h2>
          <div></div>
          <div className='quote'>
            <h1 className='quotationMark houseContent'>“</h1>
            <h2 className='houseContent'>
              Or perhaps in Slytherin, you'll make your real friends, those
              cunning folk use any means, to achieve their ends
            </h2>
            <h1 className='quotationMark houseContent'>”</h1>
            <h3 className='sortingHat houseContent'>Sorting Hat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlytherinHouse;
