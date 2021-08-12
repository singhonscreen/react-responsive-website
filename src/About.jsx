import React from 'react'
import Common from './Common'
import bg2 from '../src/images/bg2.png'

const About = ()=> {
  return (
    <>
      <h1 className="text-center">About Us</h1>
      <Common imgsrc={bg2}  link ="/contact" btntitle ='Contact Us' />
    </>
  );
}

export default About ;
