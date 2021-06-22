import React, { useRef } from 'react';
import '../scss/hogwartsInfo.scss';
import hogwarts from '../images/hogwartsPurple.png';
import hogwartsHaunted from '../images/hogwartsHaunted.gif';
import { ReactComponent as Deco } from '../svg/deco.svg';

function HogwartsInfo() {
  const hogwartsInfo = (
    <div className='hogwartsInfo fullscreen'>
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

  const hogwartsInfoAlt = (
    <div className='hogwartsInfo--alt fullscreen' aria-hidden={true} data-hero>
      <div className='hogwartsInfo--pic'>
        <img src={hogwartsHaunted} />
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
          Hogwarts is an old abandoned castle located in the Scottish Highlands.
          It was a British boarding school built around 990 A.D.
        </p>
        <p>
          The exact cause of its ruin remains unknown. But legend says you can
          hear the ghosts shrieking inside the castle to this day, its
          supernatural activity most active during the witching hour.
        </p>
      </div>
    </div>
  );
  

  return (
    <div className='fullscreen page'>
      {hogwartsInfo}
      {hogwartsInfoAlt}
    </div>
  );
}

export default HogwartsInfo;
