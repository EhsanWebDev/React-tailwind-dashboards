import React from 'react'

const Navbar = () => {
    return (
        <div className=' pt-8 max-w-5xl mx-auto'>
            <nav className=' flex items-center justify-between'>
                <button className=' font-bold text-sm uppercase'>
                    Digital Agency
                </button>
                <button className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className='hidden md:flex md:space-x-8'>
                    <p>home</p>
                    <p>testimonials</p>
                    <p>about</p>
                    <p>contact</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar