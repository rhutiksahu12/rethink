import React from 'react'
import makeAI from '../assets/makeAI.png'

const card = (props) => {
    return (
        <main className='h-full m-4'>
            
                <div className=' container flex-col bg-opacity-5 rounded-lg h-full max-w-sm shadow-lg'>
                    <div >
                        <img src={props.icon} alt={props.title} className='px-auto mx-auto pt-14 pb-4' />
                    </div>
                    <div className=' w-auto flex justify-center'>
                        <h3 className='w-auto font-semibold text-center'>{props.title}</h3>
                    </div>
                    <div className=' my-3 mx-4 px-2 pb-3'>
                        <p className='max-w-xs'>{props.details}.</p>
                    </div>
                </div>
            

        </main>
    )
}

export default card