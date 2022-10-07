import React from 'react'
import ServiceCard from './servicesCard'
import AdServices from '../assets/adsservices.png'
import AnimatedVideo from '../assets/animatedVideoServices.png'
import BlogWriting from '../assets/blog services.png'
import ProductDemo from '../assets/productDemoServices.png'
import Logo from '../assets/logoServices.png'
import CopyWriting from '../assets/copyWritingSevices.png'

const services = [{
    title: 'logos',
    src: Logo,
    details: "Have a Unique & creative logo designed to express and represent your brand identity."
},
{
    title: 'Blog Writing',
    src: BlogWriting,
    details: 'Write SEO enriched blog posts as long or short articles on any topic of your choice.',
},
{
    title: 'Animated Videos',
    src: AnimatedVideo,
    details: 'Bring animated characters to life to keep viewers engaged and entertained.',
},
{
    title: 'Product Demo',
    src: ProductDemo,
    details: 'Introduce your product to potential customers in a clear and creative video.',
},
{
    title: 'Copywriting',
    src: CopyWriting,
    details: 'Have creative and compelling copies written to boost your product, brand, service or company',
},
{
    title: 'Social Media Ads',
    src: AdServices,
    details: "Boost sales and awareness with tailor made ads from exprets.",
}
]
const ourservices = () => {
    return (
        <main className='container mx-auto'>
            <div className='flex flex-col items-center my-10 '>
                <h1 className='justify-self-center mx-auto text-2xl my-3 font-bold text-mainText align-top text-3xl'>Transform your Creation Process</h1>
                <div className='mx-10 w-1/2 text-xl'>
                    <p> With a new approach to ordering content, you can now stop juggling multiple documents and meeting and start publishing faster and on demand</p>
                </div>
                <h1 className='justify-self-center text-2xl mx-auto mt-10 my-3 font-bold text-mainText align-top text-3xl'>Activate your bussiness growth with RethinkContent.</h1>
                <div className='mx-10 w-1/2 text-xl'>
                    <p> Save time and maintain your brand identity within your budget range or signup for affordable plans and still access multiple content services like:</p>
                </div>
            </div>
            <div className=' flex justify-center grid grid-cols-3 gap-4 place-items-center w-3/4 h-4/5 mx-auto '>

                {services.map((service) => {
                    return (<div className='flex justify-center h-full w-3/4 '>

                        <ServiceCard title={service.title} image={service.src} details={service.details} />
                    </div>
                    )

                })}
            </div>





        </main>
    )
}

export default ourservices