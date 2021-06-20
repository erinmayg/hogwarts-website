import React, { useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HogwartsHouseAbout from './HogwartsHouseAbout';
import HogwartsFounder from './HogwartsFounder';

function HogwartsHouse(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'none', duration: 0.5 });

    gsap.from('.' + props.house.house + 'Content', {
      duration: 0.5,
      opacity: 0,
      delay: 1.0,
      y: 150,
      stagger: 0.25,
      toggleActions: 'restart none none reverse pause',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + props.house.house + 'Section',
        start: 'center 40%',
        toggleActions: 'restart none none reverse pause',
        scroller: '.' + props.house.house + 'HousePage',
      },
    });

    tl.to('.' + props.house.house + 'Content', {
      duration: 0.5,
      y: -150,
      opacity: 0,
      stagger: 0.25,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + props.house.house + 'Section',
        start: 'center 40%',
        toggleActions: 'restart none none reverse pause',
        scroller: '.' + props.house.house + 'HousePage',
      },
    });

    tl2.from('.' + props.house.house + 'FounderContent', {
      opacity: 0,
      y: 200,
      stagger: 0.5,
    });
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const house = props.house;

  return (
    <div
      className={'housePage ' + house.house + ' ' + house.house + 'HousePage'}
    >
      <HogwartsHouseAbout
        house={house.house}
        traits={house.traits}
        sortingHat={house.sortingHat}
        houseCrest={house.crest}
        color={house.color}
      />
      <HogwartsFounder
        house={house.house}
        bio={house.founderBio}
        houseAnimal={house.animal}
        card={house.card}
        founder={house.founder}
        founderName={house.founderName}
        color={house.color}
      />
    </div>
  );
}

export default HogwartsHouse;
