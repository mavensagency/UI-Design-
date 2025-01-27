import React from 'react'
import { use } from 'react'
import {FaStar} from "react-icons/fa"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSlider() {
 const settings = {
    dots: true,
    infinite:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };
  return (
    <>
  <div className='md:p-16 px-8'>
    <Slider{...settings}>
    {userData.map((user)=>(
         <div className=''>
          <div className='flex bg-slate-100 shrink-xl rounded-xl  md:h-[400px] h-[100%] gap-4  flex-col justify-center items-center my-5 md:py-0 py-4'>
          <div className='flex justify-center'>
            <img src={user.img} alt="User-Image" className='md:w-44 w-24 md:h-44 h-24 rounded-full'/>
          </div>
          <div className='flex justify-center flex-col items-center gap-2 md:px-16 px-4'>
            <p className='text-2xl text-black font-bold text-center'>{user.name}</p>
            <p className='text-xm text-gray-500 font-normal text-center'>{user.date}</p>
            <p className='text-center text-gray-400 font-semibold md:text-sm text-xs'>{user.description}</p>
            <div className="flex ">
            {[...Array(5)].map((_,index)=>(
              <FaStar key={index} className='text-yellow-500'/>
            ))}
            </div>
          </div>
        </div>
        </div>
    ))
}
</Slider>
</div>
    </>
  )
}


const userData=[
  {
    img:"./Images/Fatima.png",
    name:"Ayesha",
    date:"2025-01-24",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img:"./Images/Fatima.png",
    name:"Fatima",
    date:"2025-01-24",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img:"./Images/Aamina.png",
    name:"Aamina",
    date:"2025-01-24",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img:"./Images/m.png",
    name:"Aabidah",
    date:"2025-01-24",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

]
export default TestimonialSlider