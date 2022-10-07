import React from 'react'
import hero from '../assets/Retink_avatar.png'
import logo from '../assets/Logo1.svg'


const index = () => {
    return (
        <main className="  bg-mainText bg-opacity-5 h-screen">

            <div className="container relative flex flex-col-reverse md:flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0">
                <div className="absolute ml-5 pt-14 top-5 left-5 ">
                    <img src={logo} alt="" />
                </div>
                {/* left item */}
                <div className="flex flex-col mb-32 space-12 md:w-1/2">
                    <div>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-5xl md:text-left flex">

                            Get Advanced AI
                        </h1>
                        <h1 className=" text-4xl font-bold text-center md:text-5xl md:text-left flex">
                            +Expert Created &nbsp;<span className="text-mainText">Logos</span>
                        </h1>
                        <p className="my-10 w-9/12 font-normal text-xl">
                            Boost your sales <a className="text-mainText font-bold">10X faster</a> with content customised by our unique partnership of <a className="text-mainText font-bold">human creativity and AI optimization</a>
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <h1 className="text-mainText font-semibold md:text-2xl ">Sign Up For The BETA!</h1>
                    </div>
                    <div className="my-4 mt-4">

                        <input className="appearance-none border-b border-black bg-transparent  w-1/5 mx-2 leading-tight focus:outline-none" type="text" placeholder="bussiness Name" aria-label="Full name" />
                        <span>would like a beta invite sent to</span>
                        <input className="appearance-none bg-transparent border-b border-black  w-1/5 mx-2 leading-tight focus:outline-none" type="text" placeholder="Email address" aria-label="Full name" />
                        when it's ready.
                    </div>

                    <div className="flex mt-4">
                        <button className="bg-mainText w-fit px-10 py-2 mx-2 mt-2 rounded-xl text-white"> Notify me</button>
                        <button className=" underline text-blue-500 border px-4 py-2 mt-2 ml-10 rounded-xl border-mainText">Sign up as a freelancer partner</button>
                    </div>
                </div>

                {/* image */}
                <div>
                    <img src={hero} alt="hero" />

                </div>


            </div>
        </main>

    )
}

export default index