import React, { useEffect, useState } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HogwartsHouseAbout from './HogwartsHouseAbout';
import HogwartsFounder from './HogwartsFounder';
// import Characters from './Characters';
// import CharacterPage from './CharacterPage';

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
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.' + props.house.house + 'Section',
        start: 'center 40%',
        toggleActions: 'restart none none reverse pause',
        markers: true,
        scroller: '.page',
      },
    });

    // tl.to('.' + props.house.house + 'Content', {
    //   opacity: 0,
    //   y: -150,
    //   stagger: 0.25,
    // })
    //   .set('.' + props.house.house + 'Decor', {
    //     position: 'fixed',
    //     top: '0',
    //   })
    tl.from('.' + props.house.house + 'Decor', {
      opacity: 0,
      x: -150,
    }).from('.' + props.house.house + 'FounderContent', {
      opacity: 0,
      y: 150,
      stagger: 0.5,
    });
    // .set(
    //   '.' + props.house.house + 'FounderSection',
    //   {
    //     position: 'fixed',
    //     top: '0',
    //   },
    //   '-=1'
    // );
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const house = props.house;

  return (
    <div className={'page ' + house.house}>
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
