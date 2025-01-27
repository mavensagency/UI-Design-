import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoSlider = () => {
  return (
    <Marquee className='my-5'>
      <div className='mx-8'>
        <img src="./Icons/mollie-1.svg" alt="" className='w-32'/>
      </div>
      <div className='mx-8'>
        <img src="./Icons/qlik.svg" alt="" className='w-32'/>
      </div>
      <div className='mx-8'>
        <img src="./Icons/Square.svg" alt="" className='w-32'/>
      </div>
      <div className='mx-8'>
        <img src="./Icons/walmart.svg" alt="" className='w-32'/>
      </div>
      <div className='mx-8'>
        <img src="./Images/princeton.png" alt="" className='w-32'/>
      </div>
      <div className='mx-8'>
        <img src="./Images/microsoft.png" alt="" className='w-32'/>
      </div>
    </Marquee>
  );
};

export default LogoSlider;

