import React from 'react'

const Footer = () => {
    return (
        <div className='py-20  max-w-5xl mx-auto'>
            <div className=' grid grid-cols-2 max-w-md md:justify-items-end  mx-auto  gap-8 md:grid-cols-4 md:max-w-5xl'>
                <div className=' space-y-3'>
                    <h3 className='text-lg font-medium'>Digital Agency</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Consequatur, libero.</p>
                </div>

                <div className='  justify-self-center md:justify-self-auto'>
                    <h3 className='text-lg font-medium'>Resources</h3>
                    <ul className=' space-y-2'>
                        <li>
                            <button className='text-sm'>Guides</button>
                        </li>
                        <li>
                            <button className='text-sm'>Blog</button>
                        </li>
                        <li>
                            <button className='text-sm'>Custom Stories</button>
                        </li>
                        <li>
                            <button className='text-sm'>Glossary</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-medium'>Company</h3>
                    <ul className=' space-y-2'>
                        <li>
                            <button className='text-sm'>About Us</button>
                        </li>
                        <li>
                            <button className='text-sm'>Career</button>
                        </li>
                        <li>
                            <button className='text-sm'>Partners</button>
                        </li>
                        <li>
                            <button className='text-sm'>Contact Us</button>
                        </li>
                    </ul>
                </div>
                <div className='justify-self-center md:justify-self-auto'>
                    <h3 className='text-lg font-medium'>Social Media</h3>
                    <ul className=' space-y-2'>
                        <li>
                            <button className='text-sm'>LinkedIn</button>
                        </li>
                        <li>
                            <button className='text-sm'>Facebook</button>
                        </li>
                        <li>
                            <button className='text-sm'>Twitter</button>
                        </li>
                        <li>
                            <button className='text-sm'>Instagram</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer