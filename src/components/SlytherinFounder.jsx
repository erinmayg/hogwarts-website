import React, { useEffect } from 'react';
import '../App.css';
import card from '../images/card.png';
import founder from '../images/salazar.png';
import founderName from '../images/salazarName.png';

function SlytherinFounder() {
  useEffect(() => {
    const card = document.querySelector('.founderCard');
    const container = document.querySelector('.container');
    const founder = document.querySelector('.z-20');
    const name = document.querySelector('.z-30');

    container.addEventListener('mousemove', (e) => {
      let xAxis = window.innerWidth / 2 - e.pageX;
      let yAxis = window.innerHeight / 2 - e.pageY;
      card.style.transform = `rotateX(${xAxis / 50}deg) rotateY(${
        yAxis / 50
      }deg)`;

      founder.style.transform = 'translateZ(10px)';
      name.style.transform = 'translateZ(20px)';
    });

    container.addEventListener('mouseenter', (e) => {
      card.style.transition = 'none';
    });

    container.addEventListener('mouseleave', (e) => {
      card.style.transition = `all 0.5s ease`;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      founder.style.transform = 'translateZ(0px)';
      name.style.transform = 'translateZ(0px)';
    });
  });

  return (
    <div className='fullscreen founder'>
      <div className='founderSection'>
        <div className='container'>
          <div className='founderCard founderContent'>
            <img src={card} alt='Slytherin Card' className='z-10' />
            <img src={founder} alt='Salazar Slytherin' className='z-20' />
            <img src={founderName} alt='Salazar Slytherin' className='z-30' />
          </div>
        </div>
        <div>
          <h1 className='founderData founderContent'>
            <span className='dropcap green'>S</span>alazar Slytherin was a
            pure-blood wizard, noted for his <i>cunning</i> and
            <i> determination</i>. He was regarded as one of the greatest
            wizards of the age, respectively as a Parselmouth and as a skilled
            Legilimens. Infamous for being a blood-purist, Slytherin once
            proposed the prohibition of enrolling muggle-born students to
            Hogwarts.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SlytherinFounder;
