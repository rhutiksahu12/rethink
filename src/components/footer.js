import React from 'react'
import logo from '../assets/Logo.png'


const footer = () => {
    return (
        <main>
            <div className='flex flex-col h-screen overflow-hidden md:mt-20 mt-10'>

                <div className='grid h-auto justify-items-center'>
                    <h1 className="text-mainText font-semibold md:text-2xl ">Sign Up For The BETA to see more</h1>
                    <div className='flex m-4'>
                        <input className='w-1/2 h-10 border border-textUnderline mx-1 rounded-xl text-center' placeholder='Business' />
                        <input className='w-1/2 h-10 border border-textUnderline mx-1 rounded-xl text-center' placeholder='Email' />
                    </div>
                    <div>
                        <button className="bg-mainText w-fit px-10 py-2 mx-2 mt-2 rounded-xl drop-shadow-lg text-white"> Notify me</button>
                    </div>
                    <div>
                        <button className=" underline text-blue-500 border px-4 py-2 m-4 mt-7 w-fit h-fit rounded-xl border-mainText">Sign up as a freelancer partner</button>
                    </div>
                </div>
                <div className='h-2/5 mt-auto w-full bottom-0'>
                    <div className='h-4/5 w-full  bg-footer '>
                        <div className='flex justify-between h-fit'>
                            <div className='h-full w-1/2 ml-10 md:ml-20 '>
                                <img src={logo} alt='logo' className='mt-4'/>
                                <div className='flex items-center justify-between '>
                                    <div className='text-2xl font-semibold'>
                                        <h1 className='my-3'>Product by Rethink Media UG</h1>
                                        <h1>Bonn, Germany</h1>
                                    </div>
                                    <div className='text-2xl font-semibold my-10'>
                                        <h1 className=''>Get Early Access</h1>
                                        <h1>Provide Feedback</h1>
                                    </div>


                                </div>
                            </div>

                            <div className=' flex flex-col justify-center w-1/2'>
                                <h1 className='text-center text-2xl font-semibold mb-3'>Connect with Us</h1>
                                <div className='flex gap-3 justify-center'>
                                    <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
                                    <img src="https://img.icons8.com/fluency/48/000000/twitter.png" />
                                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
                                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                                    <img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='h-1/5 w-full flex items-center bg-black'>
                        <div className='w-1/2 text-center  text-white'>
                            Copyright 2021 Rethink
                        </div>
                        <div className='w-1/2 text-center text-white'>
                            <span className='mx-2'> Privacy Policy</span>
                            <span className='mx-2'> Terms of Service</span>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default footer