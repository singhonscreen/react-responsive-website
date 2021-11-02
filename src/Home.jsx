import React from 'react';
import nikky from "../src/images/nikky.jpg";
import Common from './Common';


const Home = () => {
    return (
        <>
      <Common imgsrc={nikky} link = "/service" btntitle ='Get Started' />
           
        </>
    );
}

export default Home;
