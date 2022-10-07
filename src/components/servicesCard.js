import React from 'react'
import LogoServices from '../assets/logoServices.png' 


const servicesCard = ({title, details, image}) => {
  return (
  //  <div className='w-full px-10 '>
    <div className='grid max-h-full justify-items-center'>
        <img src={image} alt={title} className=' ' />
        <div className='w-3/4'>
        <h1 className='text-lg pr-6 my-3 decoration-textUnderline'> {title} </h1>
        <div className='h-1 w-20 my-2 rounded-full bg-mainText '></div>
        <p> {details}</p>
        </div>
    </div>
   /* </div> */
      

  )
}

export default servicesCard