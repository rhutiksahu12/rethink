import React from 'react'
import Video from '../assets/video.png'

const video = () => {
    return (
        <main className='h-auto w-auto my-20 '>
            
                <div className='flex justify-center mb-10'>
                    <h1 className='text-2xl text-mainText font-semibold'>EXPLAINER VIDEO</h1>

                </div>
                <div className='flex justify-center '>
                    <img src={Video} alt='video' />
                </div>
        </main>
    )
}

export default video