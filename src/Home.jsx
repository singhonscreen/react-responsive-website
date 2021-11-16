import React from 'react';
import family from "../src/images/family.svg";
import Common from './Common';


const Home = () => {
    return (
        <>
      <Common imgsrc={family} link = "/service" btntitle ='Get Started' />
           
        </>
    );
}

export default Home;
