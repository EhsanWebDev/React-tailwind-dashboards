import React from 'react'
import { useState } from 'react'
import { Logo, } from './assets/Svg'
import Footer from './Sections/Footer'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'
import Workplace from './Sections/Workplace'
const Boldo = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' relative overflow-hidden'>

            {/* Header */}
            <header className='bg-slate-900 relative px-4'>
                {/* Navbar */}
                <nav className='flex items-center relative z-10 justify-between pt-8 max-w-6xl mx-auto'>
                    <div className='flex items-center'>
                        <Logo />
                        <h2 className='text-white ml-2 font-bold text-4xl font-sans tracking-wide'>Boldo</h2>
                    </div>
                    <button className=' lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? "" : "translate-y-full"} fixed bottom-0 right-0 left-0 bg-gray-900 h-80 duration-500
                    lg:static lg:bg-transparent lg:h-auto lg:translate-y-0 
                    `}>
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white
                        absolute right-2
                        " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <ul className='
                        flex items-center justify-center flex-col space-y-6 h-full
                            lg:flex-row lg:space-y-0 lg:h-auto lg:justify-start
                             lg:space-x-6
                            '>

                            <li><button className='text-white'>Product</button></li>
                            <li><button className='text-white'>Services</button></li>
                            <li><button className='text-white'>About</button></li>
                            <button className='bg-white text-sky-900 font-semibold text-sm px-8 shadow-md rounded-full py-2 '>Log in</button>
                        </ul>
                    </div>
                </nav>

                {/* Hero */}
                <section className=' relative z-10 max-w-6xl mx-auto flex items-center justify-between  pb-20 pt-14'>
                    <div className='flex flex-col items-center lg:items-start flex-1 lg:max-w-xl py-14 lg:pr-20'>
                        <h1 className=' text-4xl tracking-wider leading-normal  text-white font-thin mb-4'>
                            Save time by building <br />  fast with Boldo Template
                        </h1>
                        <p className='text-white font-thin text-center lg:text-left max-w-3xl mb-10'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>

                        <div className='space-x-4'>
                            <button className='bg-green-300 text-sky-900 font-semibold text-sm px-12 shadow-md rounded-full py-3.5 hover:bg-green-400 hover:text-sky-900 '>
                                Buy template
                            </button>
                            <button className='bg-transparent text-white border-2 duration-300 border-white font-semibold text-sm px-12 shadow-md rounded-full py-3 hover:border-transparent hover:bg-white hover:text-sky-900 '>
                                Explore
                            </button>
                        </div>

                    </div>
                    <div className='lg:h-full lg:flex-[0.45] lg:flex hidden'>
                        <img src="./assets/boldo/hero.png" alt="hero" className=' object-cover h-full w-full' />
                    </div>
                </section>


            </header>
            {/* Bg circle */}
            <svg height="800" width="800" className=' hidden lg:block lg:absolute lg:-top-20 lg:-right-20'>
                <circle cx="650" cy="100" r="400" stroke="black" stroke-width="0" fill="#1C3D5B" />
            </svg>

            <Services />
            <Testimonials />
            <Workplace />
            <Footer />



        </div>
    )
}

export default Boldo