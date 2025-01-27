import React from 'react'
import Banner from '../Banners/banner'
import ImageSlider from '../Carousel/ImageSlider'
import TestimonialSlider from '../Carousel/TestimonialSlider'
function About() {
  return (
   <>
   <Banner title={"About Us"}/>
   <div className="flex py-32 flex-col grid-container mx-auto gap-11 xl:px-0 px-4">
    <div><h2 className='md:text-5xl text-2xl  font-bold text-customColor text-center'>Founder Philosophy</h2></div>
    <div className="flex flex-col gap-8">
     <p className='text-center text-gray-400 font-semibold text-sm'>Carbology was born out of our founders' personal journey towards better health and a shared passion for making wellness accessible to everyone. It all began with a simple yet powerful mission: to create a sugar alternative that not only tastes great but also supports balanced blood sugar levels, combining the best of nature's wisdom with modern science.</p>
     <p className='text-center text-gray-400 font-semibold  text-sm'>Our vision was to develop a product that went beyond traditional sweeteners. We wanted to offer a solution informed by time-tested ingredients known for their health benefits, while using the latest scientific research to ensure optimal effectiveness. From carefully selecting natural components like Stevia and Chromium Picolinate to incorporating ingredients like Cinnamon Bark Extract known for their impact on blood sugar, we crafted Carbology with one goal in mind: to transform the way people enjoy sweetness.</p>
    </div>
   </div>

   <div className="flex grid-container mx-auto flex-col gap-16  xl:px-0 px-4">
    <div><p className='text-center text-customColor font-medium xl:leading-f55 xl:text-5xl md:text-3xl text-2xl'>Together, we're making healthier choices simple with our powerful sugar tablets. Believe in a sweeter, balanced life."</p></div>
   </div>
   <div className="grid-container mx-auto mt-16 mb-32 xl:px-0 md:px-16 px-8"><ImageSlider/></div>

   <div className="flex gap-10 grid-container mx-auto pt-32 xl:px-0 md:px-16 px-8 md:flex-row flex-col-reverse">
    <div className='md:w-1/2 w-fullflex items-center'>
        <img src="./Images/download.png" alt="Image" className='w-full' />
    </div>
    <div className="flex flex-col xl:gap-11 gap-8 justify-enter md:w-1/2 w-full">
        <p className='text-customColor font-bold xl:text-5xl text-4xl text-left'>Who We Are</p>
        <p className='xl:text-xl md:text-sm font-light text-gray-400 text-left'>we are on a mission to transform the way people enjoy sweetness without compromising their health. We understand the love for sugar and the cravings that come with it, but we also know the impact excessive sugar intake can have on your well-being.</p>
        <p className='xl:text-xl md:text-sm font-light text-gray-400 text-left'>we are on a mission to transform the way people enjoy sweetness without compromising their health. We understand the love for sugar and the cravings that come with it, but we also know the impact excessive sugar intake can have on your well-being.</p>
        <p className='xl:text-xl md:text-sm font-light text-gray-400 text-left'>we are on a mission to transform the way people enjoy sweetness without compromising their health. We understand the love for sugar and the cravings that come with it, but we also know the impact excessive sugar intake can have on your well-being.</p>
    </div>
   </div>

   <div className=" grid-container mx-auto py-32"><TestimonialSlider/></div>
   </>
  )
}

export default About