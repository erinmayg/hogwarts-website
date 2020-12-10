import React, { useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HogwartsHouseAbout from './HogwartsHouseAbout';
import HogwartsFounder from './HogwartsFounder';
import Characters from './Characters';
import CharacterPage from './CharacterPage';

function HogwartsHouse(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'none', duration: 0.5 });

    gsap.from('.houseContent', {
      duration: 0.5,
      opacity: 0,
      delay: 1.0,
      y: 150,
      stagger: 0.25,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.houseSection',
        start: 'center 40%',
        toggleActions: 'restart none none reverse pause',
        markers: true,
      },
    });

    tl.to('.houseContent', {
      opacity: 0,
      y: -150,
      stagger: 0.25,
    })
      .set('.decor', {
        position: 'fixed',
        top: '0',
      })
      .from('.decor', {
        opacity: 0,
        x: -150,
      })
      .from('.founderContent', {
        opacity: 0,
        y: 150,
        stagger: 0.5,
      })
      .set(
        '.founderSection',
        {
          position: 'fixed',
          top: '0',
        },
        '-=1'
      );

    // const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.houseSection',
    //     start: 'center 20%',
    //     toggleActions: 'restart none none reverse pause',
    //     // scrub: true,
    //     markers: true,
    //   },
    // });

    // tl2
    //   .to('.founderContent', {
    //     opacity: 0,
    //     y: -150,
    //     stagger: 0.25,
    //   })
    //   .to('.decor', {
    //     opacity: 0,
    //     x: -150,
    //     stagger: 0.25,
    //   })
    //   .from('.characterContent', {
    //     opacity: 0,
    //     y: 150,
    //     stagger: 0.5,
    //   })
    //   .set(
    //     '.characterSection',
    //     {
    //       position: 'fixed',
    //       top: '0',
    //       left: '0',
    //     },
    //     '-=1'
    //   )
    //   .set(
    //     '.background',
    //     {
    //       position: 'fixed',
    //       top: '0',
    //       opacity: 0,
    //     },
    //     '-=1'
    //   )
    //   .to('.background', { opacity: 1, duration: 1.5, ease: 'into' });
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
