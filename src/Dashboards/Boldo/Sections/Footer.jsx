import React from 'react'
import { Logo } from '../assets/Svg'

const Footer = () => {
    return (
        <div className=' max-w-5xl mx-auto mt-32 mb-12 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className=' space-y-4'>
                    <div className='flex items-center'>
                        <Logo />
                        <h2 className='ml-2 font-bold text-4xl font-sans tracking-wide'>Boldo</h2>
                    </div>
                    <p className=' text-gray-500 text-sm'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                    <p className=' text-gray-500 text-sm mt-8'>All rights reserved.</p>
                </div>

                <div className='flex flex-col justify-between'>
                    <p className=' font-bold'>Landings</p>
                    <a href="/" className=' text-gray-500 text-sm'>Home</a>
                    <a href="/" className=' text-gray-500 text-sm'>Products</a>
                    <a href="/" className=' text-gray-500 text-sm'>Services</a>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className=' font-bold'>Company</p>
                    <a href="/" className=' text-gray-500 text-sm'>Home</a>
                    <a href="/" className=' text-gray-500 text-sm'>Careers <span className=' bg-green-300 rounded-full text-xs text-black px-2 py-1'>Hiring</span> </a>
                    <a href="/" className=' text-gray-500 text-sm'>Services</a>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className=' font-bold'>Resources</p>
                    <a href="/" className=' text-gray-500 text-sm'>Home</a>
                    <a href="/" className=' text-gray-500 text-sm'>Products </a>
                    <a href="/" className=' text-gray-500 text-sm'>Services</a>
                </div>



            </div>

        </div>
    )
}

export default Footer