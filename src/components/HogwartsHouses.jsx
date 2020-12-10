import React, { useState } from 'react';
import HogwartsHouse from './HogwartsHouse';
import { ReactComponent as SlytherinLogo } from '../svg/slytherin.svg';
import { ReactComponent as RavenclawLogo } from '../svg/ravenclaw.svg';
import { ReactComponent as GryffindorLogo } from '../svg/gryffindor.svg';
import { ReactComponent as HufflepuffLogo } from '../svg/hufflepuff.svg';
import { ReactComponent as Snake } from '../svg/snake.svg';
import { ReactComponent as Eagle } from '../svg/eagle.svg';
import { ReactComponent as Lion } from '../svg/lion2.svg';
import badger from '../images/badger.png';
import slytherinCard from '../images/card.png';
import slytherinFounder from '../images/salazar.png';
import slytherinFounderName from '../images/salazarName.png';
import ravenclawCard from '../images/card-ravenclaw.png';
import ravenclawFounder from '../images/rowena.png';
import ravenclawFounderName from '../images/rowenaName.png';
import gryffindorCard from '../images/card-gryffindor.png';
import gryffindorFounder from '../images/godric.png';
import gryffindorFounderName from '../images/godricName.png';
import hufflepuffCard from '../images/card-hufflepuff.png';
import hufflepuffFounder from '../images/helga.png';
import hufflepuffFounderName from '../images/helgaName.png';

function HogwartsHouses() {
  const slytherin = {
    house: 'slytherin',
    traits: 'Pride • Cunning • Ambition',
    sortingHat:
      "Or perhaps in Slytherin, you'll make your real friends, those cunning folk use any means, to achieve their ends",
    crest: <SlytherinLogo />,
    color: 'green',

    founderBio: (
      <>
        <span className='dropcap green'>S</span>alazar Slytherin was a
        pure-blood wizard, noted for his <i>cunning</i> and
        <i> determination</i>. He was regarded as one of the greatest wizards of
        the age, respectively as a Parselmouth and as a skilled Legilimens.
      </>
    ),
    animal: <Snake />,
    card: slytherinCard,
    founder: slytherinFounder,
    founderName: slytherinFounderName,
  };

  const ravenclaw = {
    house: 'ravenclaw',
    traits: 'Wit • Learning • Wisdom',
    sortingHat:
      "Or yet in wise old Ravenclaw,\n if you've a ready mind,\n Where those of wit and learning,\n Will always find their kind",
    crest: <RavenclawLogo />,
    color: 'blue',

    founderBio: (
      <>
        <span className='dropcap blue'>R</span>owena Ravenclaw was a Scottish
        witch and one of the four founders of Hogwarts School of Witchcraft and
        Wizardry. She was noted for her
        <i> intelligence</i> and <i>creativity</i>. Legend had it that a broken
        heart caused her death — because her daughter Helena ran away with her
        diadem.
      </>
    ),
    animal: <Eagle />,
    card: ravenclawCard,
    founder: ravenclawFounder,
    founderName: ravenclawFounderName,
  };

  const gryffindor = {
    house: 'gryffindor',
    traits: 'Courage • Bravery • Determination',
    sortingHat:
      'You might belong in Gryffindor,\n Where dwell the brave at heart,\n Their daring, nerve, and chivalry\n Set Gryffindors apart',
    crest: <GryffindorLogo />,
    color: 'red',

    founderBio: (
      <>
        <span className='dropcap red'>G</span>odric Gryffindor was an English
        wizard, hailed from a moor which is now known as Godric's Hollow. He was
        great friends with Salazar Slytherin, but opposed him when he later
        thought that they should not accept Muggle-born students at Hogwarts.
      </>
    ),
    animal: <Lion />,
    card: gryffindorCard,
    founder: gryffindorFounder,
    founderName: gryffindorFounderName,
  };

  const hufflepuff = {
    house: 'hufflepuff',
    traits: 'Dedication • Patience • Loyalty',
    sortingHat:
      'You might belong in Hufflepuff,\n Where they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil',
    crest: <HufflepuffLogo />,
    color: 'yellow',

    founderBio: (
      <>
        <span className='dropcap yellow'>H</span>elga Hufflepuff was a Welsh
        witch and one of the four founders of Hogwarts School of Witchcraft and
        Wizardry. While the other founders chose to have special students, she
        accepted them all without preference, but the students of her house are
        described as <i> loyal</i> and <i>hard-working</i>.
      </>
    ),
    animal: <img src={badger} className='badger' />,
    card: hufflepuffCard,
    founder: hufflepuffFounder,
    founderName: hufflepuffFounderName,
  };

  return (
    <div className='page flex'>
      <HogwartsHouse house={gryffindor} />
      <HogwartsHouse house={hufflepuff} />
      <HogwartsHouse house={ravenclaw} />
      <HogwartsHouse house={slytherin} />
    </div>
  );
}

export default HogwartsHouses;
