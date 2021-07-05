import React, { useEffect } from 'react';
import '../scss/hogwartsHouses.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HogwartsHouseAbout from './HogwartsHouseAbout';
import HogwartsFounder from './HogwartsFounder';

function HogwartsHouse(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'none', duration: 0.5 });

    gsap.from('.' + props.house.house + 'Content', {
      opacity: 0,
      delay: 1.0,
      y: 150,
      stagger: 0.25,
      trigger: '.' + props.house.house + 'Section',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + props.house.house + 'Section',
        start: 'center 40%',
        toggleActions: 'restart none none reverse pause',
        scroller: '#' + props.house.house,
        // markers: true,
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
        scroller: '#' + props.house.house,
      },
    });

    tl2.from('.' + props.house.house + 'FounderContent', {
      opacity: 0,
      y: 200,
      stagger: 0.5,
    });
  });

  const house = props.house;

  return (
    <div className='housePage' id={house.house}>
      <HogwartsHouseAbout
        house={house.house}
        traits={house.traits}
        sortingHat={house.sortingHat}
        houseCrest={house.crest}
      />
      <HogwartsFounder
        house={house.house}
        bio={house.founderBio}
        card={house.card}
        founder={house.founder}
        founderName={house.founderName}
      />
    </div>
  );
}

export default HogwartsHouse;
