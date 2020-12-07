import React, { useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SlytherinHouse from './SlytherinHouse';
import SlytherinFounder from './SlytherinFounder';
import Characters from './Characters';

function Slytherin() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.defaults({ ease: 'none', duration: 0.5 });

  //   gsap.from('.houseContent', {
  //     duration: 0.5,
  //     opacity: 0,
  //     delay: 1.0,
  //     y: 150,
  //     stagger: 0.25,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.houseSection',
  //       start: 'center 40%',
  //       toggleActions: 'restart none none reverse pause',
  //       // scrub: true,
  //       markers: true,
  //     },
  //   });

  //   tl.to('.houseContent', {
  //     opacity: 0,
  //     y: -150,
  //     stagger: 0.25,
  //   })
  //     .set('.decor', {
  //       position: 'fixed',
  //       top: '0',
  //     })
  //     .from('.decor', {
  //       opacity: 0,
  //       x: -150,
  //     })
  //     .from('.founderContent', {
  //       opacity: 0,
  //       y: 150,
  //       stagger: 0.5,
  //     })
  //     .set(
  //       '.founderSection',
  //       {
  //         position: 'fixed',
  //         top: '0',
  //       },
  //       '-=1'
  //     );

  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.houseSection',
  //       start: 'center 20%',
  //       toggleActions: 'restart none none reverse pause',
  //       // scrub: true,
  //       markers: true,
  //     },
  //   });

  //   tl2
  //     .to('.founderContent', {
  //       opacity: 0,
  //       y: -150,
  //       stagger: 0.25,
  //     })
  //     .to('.decor', {
  //       opacity: 0,
  //       x: -150,
  //       stagger: 0.25,
  //     })
  //     .from('.characterContent', {
  //       opacity: 0,
  //       y: 150,
  //       stagger: 0.5,
  //     })
  //     .set(
  //       '.characterSection',
  //       {
  //         position: 'fixed',
  //         top: '0',
  //         left: '0',
  //       },
  //       '-=1'
  //     )
  //     .set(
  //       '.background',
  //       {
  //         position: 'fixed',
  //         top: '0',
  //         opacity: 0,
  //       },
  //       '-=1'
  //     )
  //     .to('.background', { opacity: 1, duration: 1.5, ease: 'into' });
  // }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='slytherin page'>
      {/* <SlytherinHouse />
      <SlytherinFounder /> */}
      <Characters />
    </div>
  );
}

export default Slytherin;
