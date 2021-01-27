import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import NavBar from 'components/NavBar';
import './style.less';
import Team from 'components/Team';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className='container'>
        <Description />
        {/* <h2>Events <FontAwesomeIcon icon={["fas", "calendar-alt"]}/></h2> */}
        {/* <p>Participate in fun activities!</p>
        <EventList limit={4}/> */}
        <Team/>
      </div>
    </div>
  );
};

export default Home;
