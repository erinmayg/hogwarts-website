import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import hogwartscrest from '../images/hogwartscrest.png';
import hogwartscrestglow from '../images/hogwartscrest-glow.png';

function Hogwarts() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.hogwartsSection', {
      duration: 3,
      scaleX: 1.2,
      scaleY: 1.2,
    })
      .to('.hogwartsContent', { scaleX: 0.8, scaleY: 0.8 }, '-=1')
      .from('.hogwartsContent', {
        duration: 3,
        opacity: 0,
        stagger: 0.25,
        ease: 'into',
      });
  }, []);
  return (
    <div className='fullscreen'>
      <div className='hogwartsSection'>
        <div className='hogwartsCrest hogwartsContent'>
          <img src={hogwartscrest} />
          <img src={hogwartscrestglow} className='hogwartsCrestglow' />
        </div>
        <h1 className='hogwartsContent'>Hogwarts</h1>
        <h2 className='hogwartsContent'>School of Witchcraft and Wizardry</h2>
        <h3 className='hogwartsContent'>Scroll Down</h3>
      </div>
    </div>
  );
}

export default Hogwarts;
