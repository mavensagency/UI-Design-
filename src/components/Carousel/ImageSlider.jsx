import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function ImageSlider() {
    const settings = {
        infinite:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
     
      };
  return (
    <>
    <div className="">
        <Slider {...settings}>
        {ImageData.map((image)=>(
            <div className='md:h-[600px]'>
               <img src={image.img} className='w-full h-full'/>
            </div>
        ))}
        </Slider>
    </div>
    </>
  )
}

const ImageData=[
    {
        img:"./Images/sliderImage.png"
    },
    {
        img:"./Images/sliderImage.png"
    },
    {
        img:"./Images/sliderImage.png"
    },    
    {
        img:"./Images/sliderImage.png"
    }
]

export default ImageSlider