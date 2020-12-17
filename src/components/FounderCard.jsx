import React, { useEffect } from 'react';
import '../App.css';

function FounderCard(props) {
  useEffect(() => {
    const card = document.querySelector('.' + props.house + 'FounderCard');
    const container = document.querySelector('.' + props.house + 'Container');
    const founder = document.querySelector('.' + props.house + '-20');
    const name = document.querySelector('.' + props.house + '-30');

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
    <div className={'container ' + props.house + 'Container'}>
      <div
        className={
          'founderCard founderContent ' +
          props.house +
          'FounderContent ' +
          props.house +
          'FounderCard '
        }
      >
        <img
          src={props.card}
          alt='Slytherin Card'
          className={'z-10 ' + props.house + '-10'}
        />
        <img
          src={props.founder}
          alt='Salazar Slytherin'
          className={'z-20 ' + props.house + '-20'}
        />
        <img
          src={props.founderName}
          alt='Salazar Slytherin'
          className={'z-30 ' + props.house + '-30'}
        />
      </div>
    </div>
  );
}

export default FounderCard;
