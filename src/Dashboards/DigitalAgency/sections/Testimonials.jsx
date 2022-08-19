import React from 'react'

const Testimonials = () => {
    return (
        <di className="">

            <div className=' py-20  max-w-5xl mx-auto'>
                <p className=' text-center'>Testimonials</p>
                <h2 className=' text-center text-4xl'>Read what other have to say</h2>

                <div className='flex flex-col justify-center py-8 space-y-4 max-w-xs mx-auto md:flex-row md:max-w-full md:space-x-4 md:space-y-0'>
                    <div className='flex flex-col items-center justify-center bg-gray-200 py-12 shadow-sm  rounded-md'>
                        <div className=' w-32 h-32 border-2 -mt-6 rounded-full overflow-hidden '>
                            <img src="./assets/agency/testi1.png" alt="" className=' w-full h-full' />
                        </div>
                        <h6>jon doe</h6>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-200 space-y-2 py-12 shadow-sm rounded-md'>
                        <div className=' w-32 h-32 border-2 -mt-6 rounded-full overflow-hidden '>
                            <img src="./assets/agency/testi2.png" alt="" className=' w-full h-full' />
                        </div>
                        <h6>jon doe</h6>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-200 space-y-2 py-12 shadow-sm rounded-md'>
                        <div className=' w-32 h-32 border-2 -mt-6 rounded-full overflow-hidden '>
                            <img src="./assets/agency/testi3.png" alt="" className=' w-full h-full' />
                        </div>
                        <h6>jon doe</h6>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates!</p>
                    </div>

                </div>

                <div className='mt-20 bg-gray-200 rounded-md max-w-md flex flex-col items-center mx-auto px-4 py-8 md:flex-row md:max-w-5xl md:space-x-20 md:px-8'>
                    <div className=' w-72 md:w-full md:flex-[0.4] md:-ml-4'>
                        <img src="./assets/agency/bigthing.png" alt="" />
                    </div>
                    <div className=' flex flex-col items-center space-y-3 flex-[0.6] md:items-start'>
                        <h4 className=' text-2xl text-indigo-800'>Be a part of the next big thing</h4>
                        <p className=' text-justify text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio?</p>
                    </div>
                </div>

            </div>

        </di>
    )
}

export default Testimonials