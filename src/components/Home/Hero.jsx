// HeroSplitSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSplitSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-32 bg-white grid-container mx-auto">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="xl:leading-f55 md:leading-f43 xl:text-f39 md:text-f28  text-f31 hidden md:block font-semibold text-customColor mb-6 line-height-f55">
          Helping You Manage <br /> Glucose Levels Effectively <br /> and Simply
        </h1>
        <h1 className="md:leading-f55 md:text-f39 text-f25 leading-f36 md:hidden block font-semibold text-customColor mb-6 line-height-f55  text-left">
          Helping You Manage  Glucose Levels Effectively  and Simply
        </h1>
        <p className="mb-6 text-customGray xl:text-f24 md:text-f16 xl:leading-f28  md:leading-f25   font-normal text-left">
          Carbology provides a reliable solution to support healthy blood sugar
          management. Thoughtfully designed to simplify your journey and fit
          seamlessly into your lifestyle.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            to="/get-started"
            className="bg-color-sky-blue text-white px-6 py-2 rounded-lg font-bold md:text-f15 text-f13 hover:bg-blue-600"
          >
            Get Started
          </Link>
          <Link
            to="/learn-more"
            className="border border-color-sky-blue text-color-sky-blue px-6 py-2 rounded-lg md:text-f15 text-f13 hover:bg-color-sky-blue hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="mt-10 md:mt-0 md:ml-8">
        <img
          src="./Images/hero.png" // Replace with your image path
          alt="Carbology Product"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSplitSection;
