import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './sections/Services'

const DigitalAgency = () => {
    return (
        <div className=' '>
            <div className='bg-gradient-to-b from-indigo-400/25 lg:from-indigo-100 lg:bg-gradient-to-br lg:to-transparent  px-4'>
                <Navbar />
                <Header />

            </div>

            <div className='bg-gradient-to-br from-transparent to-indigo-100'>
                <Services />
            </div>


        </div>
    )
}

export default DigitalAgency