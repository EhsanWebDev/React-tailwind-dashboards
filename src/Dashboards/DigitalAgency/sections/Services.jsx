import React from 'react'

const sectionItem = ""
const Services = () => {
    return (
        <div className=' py-20  max-w-5xl mx-auto '>
            <div className=' flex flex-col items-center px-12 space-y-8 md:flex-row-reverse md:justify-between'>
                <div className='flex flex-col items-center md:items-start md:flex-[0.4] space-y-8'>
                    <h1 className=' text-4xl capitalize text-center font-semibold md:text-start md:text-3xl'>Branding & design system</h1>
                    <p className=' text-gray-700 text-sm text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, dolores. Lorem ipsum dolor sit amet.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
                <div className=' md:flex-[0.4]'>
                    <img src="./assets/agency/services1.png" alt="section image" />
                </div>
            </div>
            <div className=' flex mt-12 flex-col items-center px-12 space-y-8 md:flex-row md:justify-between'>
                <div className='flex flex-col items-center md:items-start md:flex-[0.4] space-y-8'>
                    <h1 className=' text-4xl capitalize text-center font-semibold md:text-start md:text-3xl'>Custom plugin development</h1>
                    <p className=' text-gray-700 text-sm text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, dolores. Lorem ipsum dolor sit amet.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
                <div className=' md:flex-[0.4]'>
                    <img src="./assets/agency/services2.png" alt="section image" />
                </div>
            </div>

        </div>
    )
}

export default Services