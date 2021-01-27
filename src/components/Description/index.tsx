import React from 'react';
import './style.less';
import DescriptionImg from '../../assets/description_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
library.add(faTools);

const Description: React.FC = () => (
  <div className="description" id="description">
    <h2>
      Build something cool <FontAwesomeIcon color="black" icon={['fas', 'tools']} />
    </h2>
    <div className="description-content">
      <span className="text">
        ACM Projects is a quarter-long pursuit where teams work together to build something cool. Teams consist of
        software engineers, designers, and a product manager, and work together to create a project. Teams will receive
        mentorship and guidance to create their project.
      </span>
      <img className="description-image" src={DescriptionImg} alt="It's us!" />
    </div>
  </div>
);

export default Description;
