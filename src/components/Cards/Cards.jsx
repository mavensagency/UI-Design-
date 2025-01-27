import React from 'react'

function Cards({icon,title,description}) {
  return (
    <>
    <div className="flex shadow-md rounded-xl bg-white xl:w-1/3  w-full flex-col justify-center items-center p-4 gap-8">
     <div className="image">
        <img src={icon} alt="" className='xl:w-full w-14'/>
     </div>
     <div className='flex flex-col gap-4'>
        <p className='xl:text-3xl md:text-2xl text-xl font-bold text-black text-center'>{title}</p>
        <p className='xl:text-xl text-lg font-light text-gray-400 text-center'>{description}</p>
     </div>
    </div>
    </>
  )
}

export default Cards