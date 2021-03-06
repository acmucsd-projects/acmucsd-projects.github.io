import React from 'react';
import leftside from 'assets/left_diamonds.svg';
import rightside from 'assets/right_diamonds.svg';
import './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TypistLoop from 'components/TypistLoop';
library.add(faChevronDown);

const LandingCard: React.FC = () => {
  return (
    <div className="LandingCard">
      <div className="backdrop-wrapper">
        <img src={leftside} className="backdrop-left" alt="backdrop" />
        <img src={rightside} className="backdrop-right" alt="backdrop" />
        <div className="arrow">
          <div>Learn More</div>
          <br></br>
          <FontAwesomeIcon
            icon="chevron-down"
            style={{ cursor: 'pointer' }}
            onClick={() => document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
        <span className="landing-text">
          <h1 className="landing-title">ACM Projects</h1>
          <TypistLoop
            words={[
              'Learn with friends',
              'Build the future with ACM',
              'Create someting cool'
            ]}
          />
        </span>
      </div>
    </div>
  );
};

export default LandingCard;
