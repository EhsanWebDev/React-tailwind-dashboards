import React from 'react'

const Header = () => {
    return (
        <header className=' mt-20 max-w-5xl mx-auto '>

            <div className='flex flex-col items-center lg:flex-row '>
                <div className=' flex flex-col items-center space-y-8 lg:items-start lg:justify-between flex-[0.9]'>
                    <h1 className=' font-bold text-5xl capitalize text-center lg:text-start'>Building digital products, brands & experience</h1>
                    <p className=' text-center  lg:text-start lg:pr-8 text-lg mt-6 text-gray-700'>Digital Agency is your online team mangement tool that easy and prompt</p>
                    <button className=' bg-sky-600/60 uppercase px-6 text-sm py-1.5 rounded-md text-white hover:bg-sky-500/60'>
                        contact us
                    </button>
                </div>

                <div className='pt-8 flex-1 lg:pt-0 flex justify-end'>
                    <img src="./assets/agency/hero.png" alt="" className='' />
                </div>

            </div>
            <p className='mt-24 text-center text-sm text-gray-600 font-thin'>Trusted by 4,000+ companies</p>
        </header>
    )
}

export default Header