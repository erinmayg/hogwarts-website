import React, { useEffect } from 'react';
import '../App.css';
import CharacterCard from './CharacterCard';
import voldemort from '../images/voldemort.png';
import slytherin from '../images/slytherincard.png';
import voldemortwallp from '../images/voldemortwallp.png';

function CharacterPage() {
  return (
    <div className='fullscreen'>
      <div className='characterSection z-10'>
        <div className='characterDetails'>
          <h1 className='characterContent'>Lord Voldemort</h1>
          <h2 className='characterContent'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestias obcaecati aperiam distinctio fuga? Ipsam aut ipsa nobis
            unde dicta id, obcaecati optio magnam dolore quos totam distinctio!
            Odit, quos!
          </h2>
        </div>
        <CharacterCard pic={voldemort} house={slytherin} />
      </div>
      <img src={voldemortwallp} className='background' />
    </div>
  );
}

export default CharacterPage;
