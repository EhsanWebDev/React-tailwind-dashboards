import React from 'react'

const Testimonials = () => {
    return (
        <div className=' mb-20 bg-gray-900 px-4'>
            <div className=' py-20 max-w-3xl lg:max-w-5xl mx-auto'>

                <div className='flex items-center justify-between mb-8'>
                    <p className='text-xl lg:text-3xl tracking-wide -mt-8 text-white leading-normal font-light'>An enterprise template to ramp <br /> up your company website</p>

                    <div className='space-x-3'>
                        <button className=' bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>


                        <button className=' bg-white rounded-full p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between space-y-6 lg:space-x-6 '>
                    <div className=' bg-white rounded-md p-10 flex flex-col justify-between'>
                        <q className=' text-2xl'>Buyer buzz partner network disruptive non-disclosure agreement business</q>

                        <div className='flex items-center space-x-4 mt-11'>
                            <img src="https://images.unsplash.com/profile-1616260870442-5bae313b117eimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="user" className=' rounded-full w-12 h-12' />

                            <div>
                                <p className=' font-medium text-sm'>Albus Dumbledore</p>
                                <p className=' text-gray-700 text-xs'>Manager @ Howarts</p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-white rounded-md p-10 flex flex-col justify-between'>
                        <q className='text-2xl'>Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.</q>

                        <div className='flex items-center space-x-4 mt-11'>
                            <img src="https://images.unsplash.com/profile-1616260870442-5bae313b117eimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="user" className=' rounded-full w-12 h-12' />

                            <div>
                                <p className=' font-medium text-sm'>Albus Dumbledore</p>
                                <p className=' text-gray-700 text-xs'>Manager @ Howarts</p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-white rounded-md p-10 flex flex-col justify-between'>
                        <q className='text-2xl'>Release facebook responsive web design business model canvas seed money monetization.</q>

                        <div className='flex items-center space-x-4 mt-11'>
                            <img src="https://images.unsplash.com/profile-1616260870442-5bae313b117eimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="user" className=' rounded-full w-12 h-12' />

                            <div>
                                <p className=' font-medium text-sm'>Albus Dumbledore</p>
                                <p className=' text-gray-700 text-xs'>Manager @ Howarts</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials