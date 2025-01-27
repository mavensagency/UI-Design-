import React from 'react'

function FeatureCard({className="xl:w-w-33 w-full", hClassName,pClassName,cClassName,ImgClass, imgSrc, title, description}) {
  return (
    <>
    <div className={`flex xl:justify-between items-center ${className}`}>
        <div className="">
            <img src={imgSrc} alt="" className={`${ImgClass}`}/>
        </div>
        <div className={`flex flex-col gap-5 ${cClassName}`}>
            <h2 className={`${hClassName} `}>{title}</h2>
            <p className={`${pClassName}`}>{description}</p>
        </div>

    </div>
    </>
  )
}

export default FeatureCard