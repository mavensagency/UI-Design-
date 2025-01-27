import React from 'react'

function Banner({title}) {
  return (
    <>
    <div className="flex items-center bg-color-sky-blue-light pt-32 pb-14" style={{backgroundImage:`url(/Images/bannerbg.png)`,backgroundPosition:'right', backgroundRepeat:'no-repeat'}}>
    <div className='grid-container mx-auto'>
        <div className='w-[73rem] px-4'><h1 className='text-3xl font-bold text-customColor'>{title}</h1></div>
    </div>
    </div>
    </>
  )
}

export default Banner