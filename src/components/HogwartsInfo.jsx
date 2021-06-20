import React from 'react';
import '../scss/hogwartsInfo.scss';
import hogwarts from '../images/hogwartsPurple.png';
import { ReactComponent as Deco } from '../svg/deco.svg';

function HogwartsInfo() {
  return (
    <div className='hogwartsInfo fullscreen page'>
      <div className='hogwartsInfo--pic'>
        <img src={hogwarts} />
        <div className='hogwartsInfo--pic--text'>
          <h1>Hogwarts</h1>
          <h2>Scottish Highlands</h2>
        </div>
        <Deco />
      </div>
      <div className='hogwartsInfo--text'>
        <Deco />
        <h1>990 A.D.</h1>
        <p>
          Hogwarts School of Witchcraft and Wizardry, often shortened to
          Hogwarts, was the British wizarding school, located in the Scottish
          Highlands. It accepted magical students from Great Britain and Ireland
          for enrolment. It was a state-owned school, funded by the Ministry of
          Magic.
        </p>
        <p>
          The precise location of the school could never be uncovered because it
          was rendered Unplottable. To Muggles, the school appeared to be an
          old, abandoned castle.
        </p>
      </div>
    </div>
  );
}

export default HogwartsInfo;
