import React from 'react'
import Banner from '../Banners/banner'
import Cards from '../Cards/Cards'
import FormComponent from '../Form/Form'
function Contact() {
  return (
    <>
    <Banner title={"Contact"}/>
    <div className="flex grid-container mx-auto gap-4 py-32 xl:px-0 px-4 flex-col md:flex-row">
     <Cards icon={"./Icons/location.svg"} title={"Location"} description={"99 NY Address Street, Brooklyn, United State"} />
     <Cards icon={"./Icons/Call.svg"} title={"Phone Number"} description={<><span>875 7556 464 7658</span><br></br><span>765 648 567 98
        </span></>} />
     <Cards icon={"./Icons/Web.svg"} title={"Web Contact"} description={<><span>info@suxnixmail.com</span><br></br><span>suxnixexample.com</span></>} />
    </div>
    <div className="flex grid-container mx-auto pb-32">
      <FormComponent/>
    </div>
    </>
  )
}

export default Contact