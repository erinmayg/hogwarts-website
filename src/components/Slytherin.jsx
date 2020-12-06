import React, { useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SlytherinHouse from './SlytherinHouse';
import SlytherinFounder from './SlytherinFounder';

function Slytherin() {
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
        // scrub: true,
        markers: true,
      },
    });

    tl.to('.houseContent', {
      opacity: 0,
      y: -150,
      stagger: 0.25,
    })
      .from('.founderContent', {
        opacity: 0,
        y: 150,
        stagger: 0.5,
      })
      .to(
        '.founderContent',
        {
          yPercent: -50,
        },
        '-=1'
      )
      .set(
        '.founderSection',
        {
          position: 'fixed',
          top: '0',
          left: '0',
        },
        '-=1'
      );
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='slytherin page'>
      <SlytherinHouse />
      <SlytherinFounder />
    </div>
  );
}

export default Slytherin;
