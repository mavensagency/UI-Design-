import React from "react";
import HeroSplitSection from "./Hero";
import LogoSlider from "../Marquee/LogoSlider";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import CustomAccordion from "../Accordion/Accordion";
import TestimonialSlider from "../Carousel/TestimonialSlider";
function Home() {
  return (
    <>
      <HeroSplitSection />
      <div className="flex gap-32 flex-col xl:pb-32 xl:py-0 py-32">
        <div className="flex flex-col grid-container md:mx-auto gap-6">
          <div>
            <h2 className="text-4xl font-semibold text-center text-customColor">
              Trusted Partner
            </h2>
          </div>
          <LogoSlider />
        </div>
        <div className="flex bg-color-sky-light  grid-container xl:mx-auto py-16 md:px-8 px-2 xl:gap-8  gap-24 xl:flex-row flex-col">
          <FeatureCard
            imgSrc="./Icons/SVG.svg"
            title="Sustained Energy"
            description="Helps support your body's natural energy for daily activities."
            className="gap-4"
            hClassName="text-2xl font-bold"
            pClassName="text-sm text-gray-600 font-normal"
            ImgClass="xl:w-24"
          />
          <FeatureCard
            imgSrc="./Icons/Simplified.svg"
            title="Simplified Use"
            description="Designed for convenience in managing your glucose levels."
            className="gap-4"
            hClassName="text-2xl font-bold"
            pClassName="text-sm text-gray-600 font-normal"
            ImgClass="xl:w-24"
          />
          <FeatureCard
            imgSrc="./Icons/Clinically.png"
            title="Clinically Supported"
            description="Crafted with ingredients backed by research for glucose management."
            className="gap-4"
            hClassName="text-2xl font-bold"
            pClassName="text-sm text-gray-600 font-normal"
            ImgClass="xl:w-24"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse  md:flex-row items-center justify-between px-8 pb-32 bg-white grid-container mx-auto xl:gap-32 md:gap-0 gap-16">
        {/* Left Content */}
        <div className="xl:max-w-lg text-center md:text-left xl:w-full md:w-2/3 w-full">
          <h1 className="leading-snug xl:text-4xl   text-2xl font-medium text-customColor mb-6 line-height-f55 text-left">
            The perfect support for your body’s blood sugar balance.
          </h1>
          <p className="mb-6 text-customGray  font-normal xl:text-sm  text-xs leading-relaxed text-left">
            Managing blood sugar levels can be a challenge, and finding a
            reliable solution is essential for maintaining overall health and
            well-being. Our sugar-blocking formula is thoughtfully designed to
            provide the best support for keeping blood sugar steady.
          </p>
          <div className="flex justify-start space-x-4">
            <Link
              to="/get-started"
              className="bg-color-sky-blue text-white px-6 py-2 rounded-lg font-bold md:text-f15 text-f13 hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0 md:ml-8">
          <img
            src="./public/Images/Group.png" // Replace with your image path
            alt="Carbology Product"
            className="w-full"
          />
        </div>
      </div>

      <div className=" bg-color-sky-light pb-32 pt-16 md:px-16 px-4">
        <div className="flex gap-20 grid-container mx-auto flex-col">
          <div className="flex md:gap-1 gap-9 flex-col w-full">
            <div>
              <h1 className="xl:leading-f55 md:leading-f43 xl:text-2xl md:text-f28  text-xl  font-semibold text-customColor  line-height-f55 text-center">
                CARBOLOGY INGREDIENTS
              </h1>
            </div>
            <div>
              <p className="mb-6 text-customGray xl:text-xl md:text-f16 text-xs xl:leading-f28   md:leading-f25   font-normal text-center">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ELIT FAUCIBUS TORTOR
                SCeleriSQUE DIAM VIVERRA
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col md:w-1/3 w-full xl:gap-28 gap-12">
              <FeatureCard
                imgSrc="./Icons/Strong.svg"
                title="Stevia Extract"
                description="Naturally adds sweetness without the harmful effects of sugar."
                className="gap-7 xl:flex-row-reverse md:flex-col flex-row"
                hClassName="xl:text-right md:text-center text-left md:text-xl text-lg  font-bold uppercase"
                pClassName="xl:text-right md:text-center text-left text-gray-600 text-sm font-normal"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
              <FeatureCard
                imgSrc="./Icons/Picolinate.svg"
                title="Chromium Picolinate"
                description="A thing added to something else in order to complete or enhance it."
                className="gap-7 xl:flex-row-reverse md:flex-col flex-row"
                hClassName="xl:text-right md:text-center text-left md:text-xl text-lg  font-bold uppercase"
                pClassName="xl:text-right md:text-center text-left text-gray-600 text-sm font-normal"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
              <FeatureCard
                imgSrc="./Icons/Magnesium.svg"
                title="Magnesium"
                description="Aiding cellular function and supporting metabolic processes."
                className="gap-7 xl:flex-row-reverse md:flex-col flex-row"
                hClassName="xl:text-right md:text-center text-left md:text-xl text-lg  font-bold uppercase"
                pClassName="xl:text-right md:text-center text-left text-gray-600 text-sm font-normal"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
            </div>
            <div className="mt-10 mb-10 md:mt-0 md:ml-8 md:w-1/3 w-full flex justify-center items-center">
              <img
                src="./public/Icons/Tablet.svg" // Replace with your image path
                alt="Carbology Product"
                className="md:w-4/5 w-2/3" 
              />
            </div>
            <div className="flex flex-col md:w-1/3 w-full xl:gap-28 gap-12">
              <FeatureCard
                imgSrc="./Icons/Glucomannan.svg"
                title="Glucomannan"
                description="A thing added to something else in order to complete or enhance it."
                className="gap-7 xl:flex-row md:flex-col flex-row"
                hClassName=" md:text-xl text-lg font-bold uppercase xl:text-left md:text-center text-left"
                pClassName="text-gray-600 text-sm font-normal xl:text-left md:text-center text-left"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
              <FeatureCard
                imgSrc="./Icons/Bitter.svg"
                title="Bitter Melon"
                description="A thing added to something else in order to complete or enhance it."
                className="gap-7 xl:flex-row md:flex-col flex-row"
                hClassName=" md:text-xl text-lg font-bold uppercase xl:text-left md:text-center text-left"
                pClassName="text-gray-600 text-sm font-normal xl:text-left md:text-center text-left"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
              <FeatureCard
                imgSrc="./Icons/Fenugreek.svg"
                title="Fenugreek Seed"
                description="Aiding carbohydrate breakdown and glucose absorption."
                className="gap-7 xl:flex-row md:flex-col flex-row"
                hClassName=" md:text-xl text-lg font-bold uppercase xl:text-left md:text-center text-left"
                pClassName="text-gray-600 text-sm font-normal xl:text-left md:text-center text-left"
                cClassName="gap-0"
                ImgClass="xl:w-24 md:w-16 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    
      <div className="flex grid-container mx-auto flex-col py-32 gap-16">
        <div className="w-full"><h2 className="text-4xl font-semibold  text-customColor text-center">FAQS</h2></div>
        <div>
          <CustomAccordion/>
        </div>
      </div>
      <div className=" grid-container mx-auto py-32"><TestimonialSlider/></div>
    </>
  );
}

export default Home;
